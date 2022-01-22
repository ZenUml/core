<template>
  <div class="message-layer" :style="{'width': totalWidth + 'px'}">

    <block :context="context" :style="{'padding-left': paddingLeft + 'px'}"/>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex'
  import Block from './Block'

  export default {
    name: 'message-layer',
    props: ['context'],
    data() {
      return {
        left: 0,
        right: 0,
        totalWidth: 0
      }
    },
    computed: {
      ...mapGetters(['messageLayerLeft', 'participants', 'centerOf', 'rightOf',
        ]),
      ...mapState([]),

      starter() {
        return this.participants?.Starter()?.name
      },
      paddingLeft () {
        return this.centerOf(this.starter) - 1
      },
    },
    mounted () {
      console.debug('MessageLayer mounted')
      let leftEdge = this.$el.getBoundingClientRect().left
      // set messageLayerLeft in store
      this.$store.commit('setMessageLayerLeft', leftEdge)
      console.log('MessageLayer leftEdge', leftEdge)
      this.emitFirstInvocations()
      this.updateWidth()
    },
    updated () {
      console.log('MessageLayer updated')
      // print out occurrence position recursively.
      const that = this
      function _recurse(node) {
        if(node.attributes && node.attributes['data-el-type']?.nodeValue === 'occurrence') {
          const participant = node.attributes['data-belongs-to'].nodeValue;
          console.debug('Occurrence found for', participant)
          try {
            // get the offset position of the element
            const offset = node.getBoundingClientRect()
            const center = offset.left + offset.width / 2
            // update $store.participantPositions with the center of this occurrence
            that.$store.dispatch('positionParticipant', {
              participant: participant,
              position: Math.floor(center - that.messageLayerLeft),
            })

          } catch (e) {
            console.error(e)
          }

        }
        if (node.children && node.children.length > 0) {
          node.children.forEach(_recurse)
        }
      }
      _recurse(this.$el)
      this.$store.commit('setPositioned', true)
      // We do not need to call the following two methods here
      // because mounted will be invoked every time when we change code
      // this.emitFirstInvocations()
      // this.updateWidth()
    },
    methods: {
      ...mapMutations(['onMessageLayerMountedOrUpdated']),
      updateWidth() {
        let rearParticipant = this.participantNames().pop()
        // 20px for the right margin of the participant
        let leftEdge = this.$el.getBoundingClientRect().left
        let rightEdge = this.rightOf(rearParticipant) + leftEdge
        function _recurse(node) {
          const childLeft = node.getBoundingClientRect().right;
          rightEdge = Math.max(rightEdge, childLeft)
          if(node.children && node.children.forEach) {
            node.children.forEach(function (c) { _recurse(c); })
          }
        }
        this.$el && _recurse(this.$el)
        this.left = leftEdge
        this.right = rightEdge
        this.totalWidth = rightEdge - leftEdge + 10
      },
      participantNames() {
        // According to the doc, computed properties are cached.
        return this.participants.Names()
      },
      emitFirstInvocations () {
        let firstInvocations = {}
        this.participantNames().forEach(name => {
          firstInvocations[name] = this.firstInvocation(name)
        })
        // this.onMessageLayerMountedOrUpdated(firstInvocations);
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
    margin-top: 5px;     /* To create some margin for cosmetic only */
    /*Keep dashed here otherwise no space is given to the border*/
    border: 5px dashed transparent;
  }

  .interaction.highlight,
  .interaction.hover {
    border-radius: 4px;
    background-color: rgba(202, 235, 254, .5);
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
