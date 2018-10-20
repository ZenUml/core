<template>
  <div>
      <interaction-async
        v-if="stat.asyncMessage() && !isSelfAsyncMessage(stat.asyncMessage())"
        :context = "stat.asyncMessage()"
        :from="from"
        :comment="comment"
      >
      </interaction-async>
      <self-interaction-async
        v-if="stat.asyncMessage() && isSelfAsyncMessage(stat.asyncMessage())"
        :context = "stat.asyncMessage()"
        :from="from"
        :comment="comment"
      >
      </self-interaction-async>
      <creation
        v-if="stat.creation()"
        :context="stat.creation()"
        :from="from"
        :comment="comment"
        :offset="offset"
      >
      </creation>
      <interaction
        v-if="!!stat.message() && !!stat.message().to() && !(stat.message().to().getCode() === from)"
        :context="stat.message()"
        :from="from"
        :comment="comment"
        :offset="offset"
      >
      </interaction>
      <self-interaction
        v-if="!!stat.message() && (!stat.message().to() || stat.message().to().getCode() === from)"
        :context="stat.message()"
        :from="from"
        :comment="comment"
        :offset="offset"
      >
      </self-interaction>
      <fragment-alt
        v-if="!!stat.alt()"
        :context="stat.alt()"
        :from="from"
        :comment="comment"
      >
      </fragment-alt>
      <fragment-loop
        v-if="!!stat.loop()"
        :context="stat.loop()"
        :from="from"
        :comment="comment"
      >
      </fragment-loop>
  </div>
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
      stat: function () {
        return this.context
      },
      comment: function () {
        return this.stat && this.stat.comment() ? this.stat.comment().getCode() : ''
      }
    },
    methods: {
      isSelfAsyncMessage: function (asyncContext) {
        return asyncContext.source().getCode() === asyncContext.target().getCode()
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
