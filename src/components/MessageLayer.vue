<template>
  <div class="message-layer" >
    <block :context="rootContext.block()" :from="starter" :style="{'padding-left': paddingLeft + 'px'}"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Block from './Block'

  export default {
    name: 'message-layer',
    computed: {
      ...mapGetters(['rootContext', 'starter', 'centerOf']),
      paddingLeft () {
        return this.centerOf(this.starter)
      }
    },
    mounted () {
      // We don't need to emitFirstInvocations here because `updated` will be called
      // after lifeline-layer is mounted (updating lifeLineDimensions).
      // Messages layout is NOT finalised after the first round of mounting.
    },
    updated () {
      this.emitFirstInvocations()
    },
    methods: {
      emitFirstInvocations () {
        let firstInvocations = {}
        this.$store.getters.participants.forEach(participant => {
          firstInvocations[participant] = this.firstInvocation(participant)
        })
        this.$store.commit('onMessageLayerMountedOrUpdated', firstInvocations)
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
    width: 16px;
    left: calc(100% - 8px);   /* Push the occurrence bar to the right */
    padding: 16px 0;          /* Provide default height for the occurrence bar */
    padding-left: 6px;        /* Align the left of nested message to the center of the lifeline */
    border-width: 2px;
  }

  .interaction.right-to-left > .occurrence {
    left: -8px;               /* overlay occurrence bar on the existing bar. */
  }

  .interaction.self > .occurrence {
    left: -8px;               /* overlay occurrence bar on the existing bar. */
    margin-top: -10px;
    margin-left: 6px;
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
