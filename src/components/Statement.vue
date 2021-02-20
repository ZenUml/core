<template>
  <component v-bind:is="subStatement"
             :context="context"
             :fragment-offset="fragmentOffset || 0"
             :comment="comment"
             :selfCallIndent="selfCallIndent"></component>
</template>

<script>
  import Creation from './Creation.vue'
  import Interaction from './Interaction.vue'
  import InteractionAsync from './Interaction-async.vue'
  import FragmentAlt from './FragmentAlt.vue'
  import FragmentPar from './FragmentPar.vue'
  import FragmentLoop from './FragmentLoop.vue'
  import FragmentOpt from './FragmentOpt.vue'
  import Divider from './Divider.vue'

  export default {
    name: 'statement',
    props: ['context', 'selfCallIndent', 'fragmentOffset'],
    computed: {
      comment: function () {
        return this.context.getComment() ? this.context.getComment() : ''
      },
      subStatement: function () {
        let that = this
        let dict = {
          loop: 'FragmentLoop',
          alt: 'FragmentAlt',
          par: 'FragmentPar',
          opt: 'FragmentOpt',
          creation: 'Creation',
          message: 'Interaction',
          asyncMessage: 'InteractionAsync',
          divider: 'Divider'
        }
        let key = Object.keys(dict).find(x => that.context[x]() !== null)
        return dict[key]
      }
    },
    components: {
      Creation,
      Interaction,
      InteractionAsync,
      FragmentAlt,
      FragmentPar,
      FragmentOpt,
      FragmentLoop,
      Divider
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
