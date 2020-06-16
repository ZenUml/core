import {Participants, Depth} from '../parser'
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['leftOf', 'rightOf', 'centerOf']),
    boundary: function () {
      const that = this
      let arrayLeft = [this.from, ...Participants(this.context)]
        .map(function (participant) {
          return that.leftOf(participant)
        })
      let arrayRight = [this.from, ...Participants(this.context)]
        .map(function (participant) {
          return that.rightOf(participant)
        })
      // shift 20px the fragment is at the top level (starter is a participant)
      let min = Math.max(20, Math.min(...arrayLeft))
      let max = Math.max(...arrayRight)
      return {
        min: min,
        max: max,
        width: Math.max(max - min, 100)
      }
    },
    depth: function () {
      return Depth(this.context)
    },
    centerOfFrom: function () {
      return this.centerOf(this.from)
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
