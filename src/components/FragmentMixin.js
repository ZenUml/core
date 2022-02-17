import {Depth, Participants} from '../parser'
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['coordinates', 'distance2']),
    localParticipants: function() {
      // [A, B, C, D] the order may not be the same as appeared on the Lifeline layer
      return [this.from, ...Participants(this.context).ImplicitArray().map(p => p.name)]
    },
    leftParticipant: function () {
      const allParticipants = this.coordinates.participantModels.map(p => p.name);
      return allParticipants.find(p => this.localParticipants.includes(p))
    },
    rightParticipant: function () {
      const allParticipants = this.coordinates.participantModels.map(p => p.name);
      return allParticipants.reverse().find(p => this.localParticipants.includes(p))
    },
    depth: function () {
      return Depth(this.context)
    },
    offsetX: function () {
      let extra = 10 * (this.depth + 1)
      return this.distance2(this.leftParticipant, this.from) + extra
    },
    fragmentStyle: function () {
      return {
        transform: 'translateX(' + ((this.offsetX + 1) * (-1)) + 'px)',
        width: (this.distance2(this.leftParticipant, this.rightParticipant) + 20 * this.depth + 50) + 'px',
      }
    }
  }
}
