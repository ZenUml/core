
export default {
  computed: {
    message: function () {
      return this.context?.message()
    },
    providedFrom: function() {
      return this.context?.message()?.messageBody()?.from()?.getTextWithoutQuotes()
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
      return this.func?.signature().map(s => s.getTextWithoutQuotes()).join('.')
    },
    translateX: function() {
      const indent = this.selfCallIndent || 0
      const fragmentOff = this.fragmentOffset || 0
      if (this.outOfBand) {
        if (!this.rightToLeft) {
          // A    B     C
          // inh  pro   to
          const dist = this.distance2(this.origin, this.providedFrom)
          return dist - indent + fragmentOff
        } else {
          // A    B     C
          // to   pro   inh
          const dist = this.distance2(this.to, this.origin)
          return (dist + indent - fragmentOff) * (-1)
        }
      } else {
        if (!this.rightToLeft) {
          // A    B
          // inh  to
          // No self call indent here. It is used only for width.
          return fragmentOff
        } else {
          // A    B
          // to   inh
          const dist = this.distance2(this.to, this.origin)
          return (dist + indent - fragmentOff) * (-1)
        }
      }
    },
    rightToLeft: function () {
      return this.centerOf(this.to) < this.centerOf(this.from)
    },
    isCurrent: function () {
      return this.message?.isCurrent(this.cursor);
    }
  }
}
