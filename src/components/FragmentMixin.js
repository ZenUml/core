import {Depth, Participants} from '../parser'
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['participants2', 'leftOf', 'rightOf', 'centerOf']),
    localParticipants: function() {
      // [A, B, C, D] the order may not be the same as appeared on the Lifeline layer
      return [this.from, ...Participants(this.context).ImplicitArray().map(p => p.name)]
    },
    leftParticipant: function () {
      const allParticipants = this.participants2.Names();
      return allParticipants.find(p => this.localParticipants.includes(p))
    },
    rightParticipant: function () {
      const allParticipants = this.participants2.Names();
      return allParticipants.reverse().find(p => this.localParticipants.includes(p))
    },
    boundary: function () {
      // shift 20px the fragment is at the top level (starter is a participant)
      let min = this.from === 'Starter' ? 20 : this.leftOf(this.leftParticipant)
      let max = this.rightOf(this.rightParticipant)
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
        width: (this.boundary.width + 20 * this.depth + 50) + 'px'
      }
    }
  }
}
