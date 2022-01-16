<template>
  <div  :id="entity.name"
        class="lifeline"
        :class="classes"
        :style="{'paddingTop': top + 'px'} ">
    <div class="participant flex flex-col justify-center object-contain border-2"
         :class="{'selected': selected, [entity.participantType]: true, 'border-none': !!icon, 'border-solid': !icon}" @click="onSelect">
      <img v-if="!!icon" :src="icon" class="object-contain h-8 w-8 m-auto" :alt="`icon for ${entity.name}`">
      <label class="interface m-auto" v-if="entity.stereotype" >«{{entity.stereotype}}»</label>
      <label class="name m-auto">{{entity.label || entity.name}}</label>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

const iconPath = {
  actor:      require('../../assets/actor.svg'),
  entity:     require('../../assets/Robustness_Diagram_Entity.svg'),
  boundary:   require('../../assets/Robustness_Diagram_Boundary.svg'),
  control:    require('../../assets/Robustness_Diagram_Control.svg'),
  database:   require('../../assets/database.svg'),
  ec2:        require('../../assets/Amazon-EC2.svg'),
  ecs:        require('../../assets/Amazon-Elastic-Container-Service_light-bg.svg'),
  iam:        require('../../assets/AWS-Identity-and-Access-Management_IAM.svg'),
  lambda:     require('../../assets/AWS-Lambda.svg'),
  rds:        require('../../assets/Amazon-RDS.svg'),
  s3:         require('../../assets/Amazon-Simple-Storage-Service-S3_light-bg.svg'),
  }
  export default {
    name: 'life-line',
    props: ['entity', 'context'],
    computed: {
      ...mapGetters(['firstInvocations', 'onLifelineMounted']),
      icon() {
        return iconPath[this.entity.type?.toLowerCase()]
      },
      classes() {
        if (this.entity.type) {
          return ['icon', this.entity.type.toLowerCase()]
        }
        return []
      },
      selected () {
        return this.$store.state.selected.includes(this.entity.name)
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
      ...mapMutations(['onLifelinePositioned']),
      onSelect() {
        this.$store.commit('onSelect', this.entity.name)
      }
    },
    mounted() {
      this.onLifelinePositioned({
        name: this.entity.name,
        el: this.$el
      })
      this.onLifelineMounted(this, this.$vnode.elm);
    },
    updated() {
      this.onLifelinePositioned({
        name: this.entity.name,
        el: this.$el
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* LifeLineLayer's display is flex, its children don't need display:inline-block */
  .lifeline {
    display: flex;            /* So that .line fill the remaining height */
    flex-direction: column;
    margin: 0 20px;
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

</style>
