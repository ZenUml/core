<template>
  <div  :id="entity.name"
        class="lifeline absolute mx-2 transform -translate-x-1/2 h-full"
        :style="{'paddingTop': top + 'px', left: expectedPos + 'px'} ">
    <participant :entity="entity"/>
    <div class="line w0 mx-auto h-full w-px"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Participant from "@/components/lifeline/Participant";

export default {
  name: 'life-line',
  components: {Participant},
  props: ['entity', 'context'],
  data: () => {
    return {
      translateX: 0
    }
  },
  computed: {
    ...mapGetters(['firstInvocations', 'onLifelineMounted', 'centerOf']),
    expectedPos() {
      return this.centerOf(this.entity.name) - 8
    },
    top() {
      if (this.firstInvocationIsCreation) {
        return this.firstInvocations[this.entity.name].top - 3 - this.$el?.offsetTop
      }
      return 0
    },
    firstInvocationIsCreation() {
      return this.firstInvocations[this.entity.name] && this.firstInvocations[this.entity.name].type === 'creation'
    }
  },
  methods: {
    onSelect() {
      this.$store.commit('onSelect', this.entity.name)
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
