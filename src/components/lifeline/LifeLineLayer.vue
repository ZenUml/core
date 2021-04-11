<template>
  <div class="life-line-layer">
    <life-line
      v-if="starterOnTheLeft"
      :entity="starterParticipant"
      class="starter"
      :class="{hidden: starterParticipant.name === '_STARTER_'}"
      />
    <template v-for="(child, index) in explicitGroupAndParticipants">
      <life-line-group :key="index"
                       v-if="child instanceof GroupContext"
                       :context="child" />
      <life-line :key="index"
                 v-if="child instanceof ParticipantContext"
                 :entity="getParticipantEntity(child)" />
    </template>
    <life-line v-for="entity in implicitParticipants" :key="entity.name" :entity="entity"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import LifeLine from './LifeLine.vue'
  import LifeLineGroup from './LifeLineGroup'
  import {Participants} from '../../parser/index'

  export default {
    name: 'life-line-layer',
    props: ['context'],
    computed: {
      ...mapGetters(['participants', 'GroupContext', 'ParticipantContext']),
      starterParticipant() {
        return this.participants.Starter()
      },
      starterOnTheLeft() {
        // explicit means the participant is declared in the participant section.
        // If it is explicit, it will be rendered in the explicitParticipant section
        // see the template for more information.
        return !this.starterParticipant.explicit
      },
      implicitParticipants () {
        return this.participants.ImplicitArray()
      },
      explicitGroupAndParticipants() {
        return this.context?.children.filter(c => {
          const isGroup = c instanceof this.GroupContext
          const isParticipant = (c instanceof this.ParticipantContext)
          return isGroup || isParticipant
        })
      }
    },
    methods: {
      getParticipantEntity(ctx) {
        return Participants(ctx).First()
      }
    },
    components: {
      LifeLine,
      LifeLineGroup
    }
  }
</script>

<style scoped>
  .life-line-layer {
    white-space: nowrap;  /* Do not wrap to a new line */
    position: absolute;   /* So that message layer is overlaid. */
    height: 100%;         /* To give height to the line */
  }

  .lifeline.hidden {
    visibility: hidden;
  }
</style>

