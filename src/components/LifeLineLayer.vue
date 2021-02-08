<template>
  <div class="life-line-layer">
    <life-line :entity="{name: starter}" class="starter"
               :class="{hidden: !isStarterExplicitlyDefined, actor: isStarterAnActor}"/>
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

  export default {
    name: 'life-line-layer',
    props: ['context'],
    computed: {
      ...mapGetters(['starter', 'participants', 'participants2', 'GroupContext', 'ParticipantContext']),
      isStarterAnActor() {
        return this.starter === "User" || this.starter === "Actor";
      },
      isStarterExplicitlyDefined() {
        return !!this.context?.starterExp()
      },
      implicitParticipants () {
        /* eslint-disable */
        console.log('All participants 2', this.participants2)
        console.log('All participants 2', this.context)
        return this.participants2.implicitArray()
      },
      explictGroupAndParticipants() {
        return this.context?.children.filter(c => c instanceof this.GroupContext || c instanceof this.ParticipantContext)
      }
    },
    methods: {
      ...mapMutations(['increaseGeneration']),
      getParticipantEntity(ctx) {
        return {name: ctx.name && ctx.name()?.getText(), stereotype: ctx.stereotype && ctx.stereotype()?.name()?.getText()}
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

  .lifeline.actor >>> .participant {
    text-align: center;
    border: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .lifeline.actor >>> .participant::before {
    content: '';
    display: block;
    height: 35px;
    background-size: 50px;
    background-image: url("../assets/actor.svg");
    background-position: center;
    background-repeat: no-repeat;
  }

</style>

