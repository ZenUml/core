<template>
  <div  :id="entity.name"
        class="lifeline"
        :class="classes"
        :style="{'paddingTop': top + 'px', left: left + 'px'} ">
    <div class="participant" :class="{'selected': selected, [entity.participantType]: true}" @click="onSelect">
      <label class="interface" v-if="entity.stereotype" >«{{entity.stereotype}}»</label>
      <label class="name">{{entity.label || entity.name}}</label>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'life-line',
    props: ['entity', 'context', 'groupLeft'],
    computed: {
      ...mapGetters(['lifelineLayout', 'firstInvocations', 'onLifelineMounted']),
      classes() {
        if (this.entity.type) {
          return ['icon', this.entity.type.toLowerCase()]
        }
        return []
      },
      selected () {
        return this.$store.state.selected.includes(this.entity.name)
      },
      left() {
        return this.lifelineLayout.left(this.entity.label || this.entity.name) - (this.groupLeft || 0)
      },
      top () {
        if (this.firstInvocationIsCreation) {
          return this.firstInvocations[this.entity.name].top - 3 - this.$el?.offsetTop
        }
        return 0
      },
      firstInvocationIsCreation () {
        return this.firstInvocations[this.entity.name] && this.firstInvocations[this.entity.name].type === 'creation'
      }
    },
    methods: {
      onSelect() {
        this.$store.commit('onSelect', this.entity.name)
      }
    },
    mounted() {
      this.onLifelineMounted(this, this.$vnode.elm);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* LifeLineLayer's display is flex, its children don't need display:inline-block */
  .lifeline {
    position: absolute;       /* So that we can set arbitrary left to lifeline */
    display: flex;            /* So that .line fill the remaining height */
    height: 100%;             /* TODO: will break in group */
    flex-direction: column;
    /*margin: 0 20px;*/
    background: red;
  }

  .lifeline>.participant>.interface {
    display: block;
  }

  .lifeline .line {
    flex: 1;                /* To fill the remaining height */
    margin-left: 50%;
    border-left-width: 1px;
  }

  .lifeline>.participant {
    z-index: 100;
  }

  .lifeline.icon .participant
  {
    text-align: center;
    border: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .lifeline.icon .participant::before
  {
    content: '';
    display: block;
    height: 35px;
    background-size: 35px;
    background-position: center;
    background-repeat: no-repeat;
  }

  .lifeline.actor .participant::before {
    background-image: url("../../assets/actor.svg");
  }

  .lifeline.database .participant::before {
    background-image: url("../../assets/database.svg");
  }

  .lifeline.ec2 .participant::before {
    background-image: url("../../assets/Amazon-EC2.svg");
  }

  .lifeline.ecs .participant::before {
    background-image: url("../../assets/Amazon-Elastic-Container-Service_light-bg.svg");
  }

  .lifeline.iam .participant::before {
    background-image: url("../../assets/AWS-Identity-and-Access-Management_IAM.svg");
  }

  .lifeline.lambda .participant::before {
    background-image: url("../../assets/AWS-Lambda.svg");
  }

  .lifeline.rds .participant::before {
    background-image: url("../../assets/Amazon-RDS.svg");
  }

  .lifeline.s3 .participant::before {
    background-image: url("../../assets/Amazon-Simple-Storage-Service-S3_light-bg.svg");
  }

  .lifeline.boundary .participant::before {
    background-image: url("../../assets/Robustness_Diagram_Boundary.svg");
  }

  .lifeline.control .participant::before {
    background-image: url("../../assets/Robustness_Diagram_Control.svg");
  }

  .lifeline.entity .participant::before {
    background-image: url("../../assets/Robustness_Diagram_Entity.svg");
  }

</style>
