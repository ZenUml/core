<template>
  <component v-bind:is="subStatement"
             :context="context"
             :fragment-offset="fragmentOffset || 0"
             :from="from"
             :comment="comment"
             :selfCallIndent="selfCallIndent"></component>
</template>

<script>
  import Creation from './Creation.vue'
  import Interaction from './Interaction.vue'
  import InteractionAsync from './Interaction-async.vue'
  import SelfInteractionAsync from './SelfInteraction-async.vue'
  import FragmentAlt from './FragmentAlt.vue'
  import FragmentLoop from './FragmentLoop.vue'

  export default {
    name: 'statement',
    props: ['from', 'context', 'selfCallIndent', 'fragmentOffset'],
    computed: {
      comment: function () {
        return this.context.getComment() ? this.context.getComment() : ''
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
          message: 'Interaction',
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
      SelfInteractionAsync,
      FragmentAlt,
      FragmentLoop
    }
  }
</script>
<style>
  .comments {
    font-size: 0.8em;
    line-height: 1.5em;
    opacity: 0.5;
  }

  .comments:hover {
    opacity: 0.9;
  }

  .fragment>.comments {
    width: 100%;
    border-bottom: solid 1px;
    border-top: none;
    border-left: none;
    border-right: none;
  }
</style>
