<template>
  <div class="life-line-layer absolute h-full" :style="{'min-width': '200px'}">
    <life-line
      v-if="starterOnTheLeft"
      :entity="starterParticipant"
      class="starter"
      :class="{invisible: invisibleStarter}"
    />
    <template v-for="(child, index) in explicitGroupAndParticipants">
      <life-line-group :key="index"
                       v-if="child instanceof GroupContext"
                       :context="child"/>
      <life-line :key="index"
                 v-if="child instanceof ParticipantContext"
                 :entity="getParticipantEntity(child)"/>
    </template>
    <life-line v-for="entity in implicitParticipants" :key="entity.name" :entity="entity"/>
  </div>
</template>

<script>
import {GroupContext, ParticipantContext, Participants} from '../../parser/index.js'

import {mapGetters, mapMutations} from 'vuex'
import LifeLine from './LifeLine.vue'
import LifeLineGroup from './LifeLineGroup'

export default {
  name: 'life-line-layer',
  props: ['context'],
  computed: {
    ...mapGetters(['participants', 'GroupContext', 'ParticipantContext', 'centerOf']),
    invisibleStarter() {
      return this.starterParticipant.name === '_STARTER_'
    },
    starterParticipant() {
      return this.participants.Starter()
    },
    starterOnTheLeft() {
      return !this.starterParticipant.explicit
    },
    implicitParticipants() {
      return this.participants.ImplicitArray()
    },
    explicitGroupAndParticipants() {
      return this.context?.children.filter(c => {
        const isGroup = c instanceof GroupContext
        const isParticipant = (c instanceof ParticipantContext)
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
    console.log('LifeLineLayer updated');
  },
  mounted() {
    console.log('LifeLineLayer mounted');
  },
  components: {
    LifeLine,
    LifeLineGroup
  }
}
</script>

