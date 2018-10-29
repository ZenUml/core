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
        return this.context.comment() ? this.context.comment().getCode() : ''
      },
      subStatement: function () {
        let that = this
        let dict = {
          loop: 'FragmentLoop',
          alt: 'FragmentAlt',
          creation: 'Creation',
          message: function () {
            let isSelf = !that.context.message().to() || that.context.message().to().getCode() === that.from
            return isSelf ? 'SelfInteraction' : 'Interaction'
          },
          asyncMessage: function () {
            let isSelf = that.context.asyncMessage().source().getCode() === that.context.asyncMessage().target().getCode()
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
    font-style: italic;
    line-height: 1em;
    opacity: 0.5;
  }

  .comments:hover {
    color: black;
  }

  .fragment>.comments {
    width: 100%;
    border-bottom: solid 1px gray;
    border-top: none;
    border-left: none;
    border-right: none;
  }
</style>
