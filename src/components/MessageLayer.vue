<template>
  <div class="message-layer" :style="{'width': width + 'px'}">
    <block :context="context" :style="{'padding-left': paddingLeft + 'px'}"/>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import Block from './Block'

  export default {
    name: 'message-layer',
    props: ['context'],
    computed: {
      ...mapGetters(['participants2', 'starter', 'centerOf', 'rightOf']),
      paddingLeft () {
        return this.centerOf(this.starter)
      },
      width() {
        let rearParticipant = this.participantNames().pop();
        return this.rightOf(rearParticipant) + (this.starter === 'Starter' ? 100 : 40)
      }
    },
    mounted () {
      this.emitFirstInvocations()
    },
    updated () {
      this.emitFirstInvocations()
    },
    methods: {
      ...mapMutations(['onMessageLayerMountedOrUpdated']),
      participantNames() {
        // According to the doc, computed properties are cached.
        return this.participants2.Names()
      },
      emitFirstInvocations () {
        let firstInvocations = {}
        this.participantNames().forEach(name => {
          firstInvocations[name] = this.firstInvocation(name)
        })
        this.onMessageLayerMountedOrUpdated(firstInvocations);
      },
      firstInvocation (entity) {
        let messageLayerRect = this.$el.getBoundingClientRect()

        function _loop (comp) {
          let tagName = comp.$options.name
          if (tagName === 'message' || tagName === 'self-invocation') {
            let parent = comp.$parent
            if ((parent.to || parent.source || parent.target) === entity) {
              let invocationRect = comp.$el.getBoundingClientRect()
              return {
                type: comp.$parent.$options.name,
                top: invocationRect.y - messageLayerRect.y
              }
            }
          }

          for (let child of comp.$children) {
            let result = _loop(child)
            if (result) {
              return result
            }
          }
          return null
        }
        // 'this' is the MessageLayer
        return _loop(this)
      }
    },
    components: {
      Block
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message-layer {
    padding-top: 60px;
    padding-bottom: 40px;
  }
</style>
<style>
  /* Avoid moving interaction to the left or right with margins.
  We can always assume that an interaction's border is the lifeline.
  Moving content with padding is OK.
   */
  .interaction {
    position: relative;   /* To provide width for .return */
    margin-top: 10px;     /* To create some margin for cosmetic only */
    margin-bottom: 5px;   /* To create some margin for cosmetic only */
    /*Keep dashed here otherwise no space is given to the border*/
    border: 5px dashed transparent;
  }

  .interaction.highlight,
  .interaction.hover {
    border-radius: 4px;
    background-color: #CAE6FE;
  }

  .interaction:hover {
    cursor: pointer;
  }

  .message {
    position: relative;   /* positioning Point */
  }

  /* Attach to the end of the occurrence */
  .message.return {
    position: absolute;
    bottom: 0;
  }

  .message>.name {
    font-size: 13px;
    text-align: center;
  }

  .message svg {
    position: absolute;
    width: 10px;
  }

  .message.self svg {
    width: 40px;
  }

  .message svg.arrow polyline {
    stroke: #808080;
    fill: none;
    stroke-width: 1.5;
    stroke-linejoin: round;
  }

  .occurrence {
    position: relative;
    width: 15px;
    left: calc(100% - 2px);   /* This 100% will only consider the content width of interaction. */
    padding: 16px 0;          /* Provide default height for the occurrence bar */
    padding-left: 5px;        /* (OccurrenceWidth-1)/2 - OccurrenceBorderWidth*/
    border-width: 2px;
  }

  .interaction.right-to-left > .occurrence {
    /* InteractionBorderWidth + (OccurrenceWidth-1)/2 */
    left: -12px;               /* overlay occurrence bar on the existing bar. */
  }

  .interaction.self > .occurrence {
    /* width of InteractionBorderWidth 5px + lifeline center 1px */
    left: -6px;               /* overlay occurrence bar on the existing bar. */
    margin-top: -10px;
  }

  .fragment {
    border-width: 1px;
    margin: 2px 0;
  }

  .fragment .header label {
    padding: 0 10px;
  }
  .fragment .header .name label {
    padding: 0 10px;
    background: rgba(170, 170, 170, 0.1);
  }
</style>
