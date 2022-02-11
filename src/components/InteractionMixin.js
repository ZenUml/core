
export default {
  computed: {
    message: function () {
      return this.context?.message()
    },
    providedFrom: function() {
      return this.context?.message()?.ProvidedFrom()
    },
    from: function() {
      return this.providedFrom || this.origin
    },
    outOfBand: function() {
      return !!this.providedFrom && (this.providedFrom !== this.origin)
    },
    func: function() {
      return this.message?.messageBody().func()
    },
    assignee: function () {
      function safeCodeGetter (context) {
        return (context && context.getTextWithoutQuotes()) || ''
      }
      let assignment = this.message?.messageBody().assignment()
      if (!assignment) return ''
      let assignee = safeCodeGetter(assignment.assignee())
      const type = safeCodeGetter(assignment.type())
      return assignee + (type ? ':' + type : '')
    },
    signature: function () {
      return this.message?.SignatureText()
    },
    left: function() {
      const indent = this.selfCallIndent || 0
      return indent * (-1)
    },
    translateX: function() {
      const indent = this.selfCallIndent || 0
      const fragmentOff = 0 || 0
      // ** Starting point is always the center of 'origin' **
      // Normal flow
      if(!this.rightToLeft && !this.outOfBand) {
        // + indent because we always start from the center of origin
        // starting point is moved back to the center of origin by 'left'
        return indent + fragmentOff
      }

      const moveTo = !this.rightToLeft ? this.providedFrom : this.to
      const dist = this.distance2(this.origin, moveTo)
      return dist + fragmentOff
    },
    rightToLeft: function () {
      return this.centerOf(this.to) < this.centerOf(this.from)
    },
    isCurrent: function () {
      return this.message?.isCurrent(this.cursor);
    }
  }
}
