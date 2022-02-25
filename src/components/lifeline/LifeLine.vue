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
import {mapGetters} from 'vuex'
import Participant from "@/components/lifeline/Participant";

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
    left() {
      return this.centerOf(this.entity.name) - 8 - (this.groupLeft || 0)
    },
  },
  mounted() {
    setImmediate(this.setTop)
  },
  updated() {
    setImmediate(this.setTop)
  },
  methods: {
    onSelect() {
      this.$store.commit('onSelect', this.entity.name)
    },
    setTop() {
      const firstMessage = this.$root.$el.querySelector(`[data-to="${this.entity.name}"]`);
      if (firstMessage && firstMessage.attributes['data-type'].value === 'creation') {
        const rootY = this.$root.$el.getBoundingClientRect().y
        const messageY = firstMessage.getBoundingClientRect().y
        this.top = messageY - rootY - 46
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
