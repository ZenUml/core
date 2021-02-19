<template>
  <div class="life-line-layer">
    <life-line :entity="starterParticipant"
               class="starter"
               :class="{hidden: !isStarterExplicitlyDefined}"/>
    <template v-for="(child, index) in explictGroupAndParticipants">
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
  import {Participants} from '../parser/index'

  export default {
    name: 'life-line-layer',
    props: ['context'],
    computed: {
      ...mapGetters(['participants', 'GroupContext', 'ParticipantContext']),
      starterParticipant() {
        return this.participants.Starter()
      },
      isStarterExplicitlyDefined() {
        return !!this.context?.starterExp()
      },
      implicitParticipants () {
        return this.participants.ImplicitArray()
      },
      explictGroupAndParticipants() {
        return this.context?.children.filter(c => {
          const isGroup = c instanceof this.GroupContext
          const isParticipant = (c instanceof this.ParticipantContext) && c.name()?.getText() !== this.participants?.Starter()?.name
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
      this.increaseGeneration()
    },
    mounted() {
      this.increaseGeneration()
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
    white-space: nowrap;  /* why? */
    position: absolute;   /* So that message layer is overlaid. */
    height: 100%;         /* To give height to the line */
  }

  .lifeline.starter {
    /*transform: translateX(6px);*/
  }

  .lifeline.hidden {
    visibility: hidden;
    margin-left: -40px; /* Remove the extra margin created by starter */
  }

  .lifeline.actor >>> .participant,
  .lifeline.database >>> .participant,
  .lifeline.lambda >>> .participant
  {
    text-align: center;
    border: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .lifeline.actor >>> .participant::before,
  .lifeline.database >>> .participant::before,
  .lifeline.lambda >>> .participant::before
  {
    content: '';
    display: block;
    height: 35px;
    background-size: 50px;
    background-image: url("../assets/actor.svg");
    background-position: center;
    background-repeat: no-repeat;
  }

  .lifeline.actor >>> .participant::before {
    background-size: 35px;
    background-image: url("../assets/database.svg");
  }

  .lifeline.database >>> .participant::before {
    background-size: 35px;
    background-image: url("../assets/database.svg");
  }

  .lifeline.lambda >>> .participant::before {
    background-size: 35px;
    background-image: url("../assets/AWS-Lambda_Lambda-Function_light-bg.svg");
  }

</style>

