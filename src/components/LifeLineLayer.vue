<template>
  <div class="life-line-layer">
    <life-line :entity="{name: starter}" class="starter"
               :class="{hidden: !isStarterExplicitlyDefined, actor: isStarterAnActor}"/>
    <template v-for="(child, index) in groupAndParticipants">
      <life-line-group :key="index"
                       v-if="child instanceof GroupContext"
                       :context="child" />
      <life-line :key="index"
                 v-if="child instanceof ParticipantContext"
                 :entity="{name: child.name && child.name() && child.name().getText()}" />
    </template>
    <life-line v-for="entity in entities" :key="entity.name" :entity="entity"/>
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
      ...mapGetters(['starter', 'participants', 'GroupContext', 'ParticipantContext']),
      isStarterAnActor() {
        return this.starter === "User" || this.starter === "Actor";
      },
      isStarterExplicitlyDefined() {
        return !!this.context?.starterExp()
      },
      entities () {
        return Array.from(this.participants.entries())
          .map(entry => {return {name: entry[0], stereotype: entry[1].stereotype, explicit: !!entry[1].explicit}})
          .filter((entry) => entry.name !== this.starter && !entry.explicit)
      },
      groupAndParticipants() {
        return this.context?.children.filter(c => c instanceof this.GroupContext || c instanceof this.ParticipantContext)
      }
    },
    methods: {
      ...mapMutations(['increaseGeneration']),
      isGroupContext(ctx) {
        return ctx instanceof this.GroupContext
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

