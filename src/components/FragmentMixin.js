import seqDsl from 'sequence-parser'

export default {
  computed: {
    boundary: function () {
      const that = this
      let arrayLeft = [this.from, ...seqDsl.Participants(this.context)]
        .map(function (participant) {
          return that.$store.getters.leftOf(participant)
        })
      let arrayRight = [this.from, ...seqDsl.Participants(this.context)]
        .map(function (participant) {
          return that.$store.getters.rightOf(participant)
        })
      let min = Math.min(...arrayLeft)
      let max = Math.max(...arrayRight)
      return {
        min: min,
        max: max,
        width: Math.max(max - min, 100)
      }
    },
    depth: function () {
      return seqDsl.Depth(this.context)
    },
    centerOfFrom: function () {
      return this.$store.getters.centerOf(this.from)
    },
    offsetX: function () {
      let extra = 10 * this.depth
      return this.centerOfFrom - this.boundary.min + extra
    },
    fragmentStyle: function () {
      return {
        transform: 'translateX(' + this.offsetX * (-1) + 'px)',
        width: (this.boundary.width + 20 * this.depth + 50) + 'px'
      }
    },
    blockStyle: function () {
      return {
        // 1px for the border of alt fragment
        marginLeft: (this.offsetX - 1) + 'px'
      }
    }
  }
}
