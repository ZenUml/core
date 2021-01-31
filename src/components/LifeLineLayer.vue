<template>
  <div class="life-line-layer">
    <life-line :entity="{name: starter}" :ref="starter" class="starter" :class="{hidden: !isStarterExplicitlyDefined, actor: isStarterAnActor}"/>
    <template v-for="(child, index) in groupAndParticipants">
      <component :key="index" v-bind:is="lifelineComponent(child)" :context="child" :entity="{name: child.name && child.name() && child.name().getText()}"/>
    </template>
    <life-line v-for="entity in entities" :key="entity.name" :ref="entity.name" :entity="entity"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import LifeLine from './LifeLine.vue'
  import LifeLineGroup from './LifeLineGroup'

  export default {
    name: 'life-line-layer',
    props: ['context'],
    computed: {
      ...mapGetters(['starter', 'participants']),
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
        /* eslint-disable */
        console.log(this.context?.children)

        return this.context?.children.filter(c => c.constructor.name === 'GroupContext' || c.constructor.name === 'ParticipantContext')
      },
      lifelineComponent() {
        // const that = this
        return function (child) {
          /* eslint-disable */
          console.log('!!!!', child.constructor.name)
          if (child.constructor.name === 'GroupContext') {
            return 'LifeLineGroup'
          } else {
            return 'LifeLine'
          }
        }
      }
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
    transform: translateX(6px);
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

