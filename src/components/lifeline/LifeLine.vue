<template>
  <div  :id="entity.name"
        class="lifeline absolute flex flex-col mx-2 transform -translate-x-1/2 h-full"
        :class="{'mt-8': !inGroup}"
        :style="{'paddingTop': top + 'px', left: left + 'px'} ">
    <participant :entity="entity"/>
    <div class="line w0 mx-auto flex-grow w-px"></div>
  </div>
</template>

<script>
import parentLogger from '../../logger/logger'
import {mapGetters, mapState} from 'vuex'
import Participant from "@/components/lifeline/Participant";
const logger = parentLogger.child({component: 'LifeLine'})
export default {
  name: 'life-line',
  components: {Participant},
  props: ['entity', 'context', 'groupLeft', 'inGroup'],
  data: () => {
    return {
      translateX: 0,
      top: 0,
    }
  },
  computed: {
    ...mapGetters(['centerOf']),
    ...mapState(['scale']),
    left() {
      return this.centerOf(this.entity.name) - 8 - (this.groupLeft || 0)
    },
  },
  mounted() {
    logger.debug('LifeLine mounted', this.entity.name);
    this.$nextTick( () => {
      this.setTop()
      this.$emit('rendered')
      logger.debug('LifeLine mounted $nextTick', this.entity.name);
    })
  },
  updated() {
    logger.debug('LifeLine updated', this.entity.name);
    this.$nextTick( () => {
      this.setTop()
      this.$emit('rendered')
      logger.debug('LifeLine updated $nextTick', this.entity.name);
    })
  },
  methods: {
    onSelect() {
      this.$store.commit('onSelect', this.entity.name)
    },
    setTop() {
      const firstMessage = this.$root.$el.querySelector(`[data-to="${this.entity.name}"]`);
      if (firstMessage && firstMessage.attributes['data-type'].value === 'creation') {
        const rootY = this.$el.getBoundingClientRect().y
        const messageY = firstMessage.getBoundingClientRect().y
        this.top = (messageY - rootY) / this.scale
      } else {
        this.top = 0
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .lifeline .line {
    background: linear-gradient(to bottom, transparent 50%, #223049 50%);
    background-size: 1px 20px;
  }

</style>
