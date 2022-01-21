<template>
  <div class="life-line-layer">
    <life-line
      :style="{'margin-left': invisibleStarter ? '-40px!important': '0'}"
      v-if="starterOnTheLeft"
      :entity="starterParticipant"
      class="starter"
      :class="{invisible: invisibleStarter}"
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
  import {mapGetters, mapMutations} from 'vuex'
  import LifeLine from './LifeLine.vue'
  import LifeLineGroup from './LifeLineGroup'
  import {Participants} from '../../parser/index'

  export default {
    name: 'life-line-layer',
    props: ['context'],
    computed: {
      ...mapGetters(['participants', 'GroupContext', 'ParticipantContext']),
      invisibleStarter() {
        return this.starterParticipant.name === '_STARTER_'
      },
      starterParticipant() {
        return this.participants.Starter()
      },
      starterOnTheLeft() {
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
      ...mapMutations(['increaseGeneration']),
      getParticipantEntity(ctx) {
        return Participants(ctx).First()
      }
    },
    updated() {
    },
    mounted() {
    },
    components: {
      LifeLine,
      LifeLineGroup
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .life-line-layer {
    display: flex;        /* This is to remove spaces between inline-blocks, not necessary for generated and non-formatted code*/
    min-width: 375px;     /* This line and the next line make them wide enough when there are ONLY two participants */
    justify-content: space-between; /* makes it easier to calculate the width of the message layer */
    white-space: nowrap;  /* Do not wrap to a new line */
    position: absolute;   /* So that message layer is overlaid. */
    height: 100%;         /* To give height to the line */
  }
</style>

