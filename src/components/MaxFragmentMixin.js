import {Depth} from '../parser'
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['participants', 'leftOf', 'rightOf', 'centerOf']),
    rightestParticipant: function () {
      const allParticipants = this.participants.Names();
      return allParticipants[allParticipants.length - 1]
    },
    boundary: function () {
      // shift 20px the fragment is at the top level (starter is a participant)
      let min = 20
      let max = this.rightOf(this.rightestParticipant)
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
        transform: 'translateX(' + (this.offsetX * (-1) + this.fragmentOffset) + 'px)',
        'margin-left': `-${this.centerOfFrom}px`,
        width: (this.boundary.width + 20 * this.depth + 50) + 'px'
      }
    }
  }
}
