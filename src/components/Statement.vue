<template>
  <component v-bind:is="subStatement"
             :context="context"
             :from="from"
             :comment="comment"
             :offset="offset"></component>
</template>

<script>
  import Creation from './Creation.vue'
  import Interaction from './Interaction.vue'
  import InteractionAsync from './Interaction-async.vue'
  import SelfInteraction from './SelfInteraction.vue'
  import SelfInteractionAsync from './SelfInteraction-async.vue'
  import FragmentAlt from './FragmentAlt.vue'
  import FragmentLoop from './FragmentLoop.vue'

  export default {
    name: 'statement',
    props: ['from', 'context', 'offset'],
    computed: {
      comment: function () {
        return this.context.comment() ? this.context.comment().map(c => c.commentContent()?.getCode() || '').join('\n') : ''
      },
      realFrom: function() {
        return this.context.message().func().from() && this.context.message().func().from().getCode() || this.from;
      },
      subStatement: function () {
        let that = this
        let dict = {
          loop: 'FragmentLoop',
          alt: 'FragmentAlt',
          creation: 'Creation',
          message: function () {
            let isSelf = !that.context.message().func().to() || that.context.message().func().to().getCode() === that.realFrom
            return isSelf ? 'SelfInteraction' : 'Interaction'
          },
          asyncMessage: function () {
            const source = that.context.asyncMessage().source() && that.context.asyncMessage().source().getCode()
            const target = that.context.asyncMessage().target() && that.context.asyncMessage().target().getCode()
            let isSelf = source === target
            return isSelf ? 'SelfInteractionAsync' : 'InteractionAsync'
          }
        }
        let key = Object.keys(dict).find(x => that.context[x]() !== null)
        let dictElement = dict[key]
        return typeof dictElement === 'function' ? dictElement() : dictElement
      }
    },
    components: {
      Creation,
      Interaction,
      InteractionAsync,
      SelfInteraction,
      SelfInteractionAsync,
      FragmentAlt,
      FragmentLoop
    }
  }
</script>
<style>
  .comments {
    position: relative; /* for Z axis position overlay lifeline at root level */
    text-align: left;
    border: solid 1px transparent;
    background: white;
    padding: 5px;
    width: 500px;
    font-size: 0.8em;
    line-height: 1.5em;
    opacity: 0.5;
  }

  .comments:hover {
    color: black;
    opacity: 0.9;
  }

  .fragment>.comments {
    width: 100%;
    border-bottom: solid 1px gray;
    border-top: none;
    border-left: none;
    border-right: none;
  }
</style>
