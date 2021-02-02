function isNullOrUndefined(value) {
  return value === null || value === undefined
}

export default {
  computed: {
    message: function () {
      return this.context?.message()
    },
    providedFrom: function() {
      return this.func?.from()?.getText()
    },
    from: function() {
      return this.providedFrom || this.inheritedFrom
    },
    outOfBand: function() {
      return !!this.providedFrom && (this.providedFrom !== this.inheritedFrom)
    },
    func: function() {
      return this.message?.func()
    },
    assignee: function () {
      function safeCodeGetter (context) {
        return (context && context.getCode()) || ''
      }
      let assignment = this.message?.assignment()
      if (!assignment) return ''
      let assignee = safeCodeGetter(assignment.assignee())
      const type = safeCodeGetter(assignment.type())
      return assignee + (type ? ':' + type : '')
    },
    signature: function () {
      return this.func?.signature().map(s => s.getCode()).join('.')
    },
    translateX: function() {
      if (this.outOfBand) {
        if (!this.rightToLeft) {
          // A    B     C
          // inh  pro   to
          const dist = this.distance2(this.inheritedFrom, this.providedFrom)
          const indent = this.selfCallIndent || 0
          const fragmentOff = this.fragmentOffset || 0
          return dist - indent + fragmentOff
        } else {
          // A    B     C
          // to   pro   inh
          const dist = this.distance2(this.to, this.inheritedFrom)
          const indent = this.selfCallIndent || 0
          const fragmentOff = this.fragmentOffset || 0
          return (dist + indent - fragmentOff) * (-1)
        }
      } else {
        if (!this.rightToLeft) {
          // A    B
          // inh  to
          // const indent = this.selfCallIndent || 0
          const fragmentOff = this.fragmentOffset || 0
          return fragmentOff
        } else {
          // A    B
          // to   inh
          const dist = this.distance2(this.to, this.inheritedFrom)
          const indent = this.selfCallIndent || 0
          const fragmentOff = this.fragmentOffset || 0
          return (dist + indent - fragmentOff) * (-1)
        }
      }
    },
    rightToLeft: function () {
      return this.centerOf(this.to) < this.centerOf(this.from)
    },
    isCurrent: function () {
      let start = this.func?.start.start
      // it is still considered as the current element if the cursor is just after the end of the function
      let stop = this.func?.stop.stop + 1
      /* eslint-disable */
      console.log(start, stop, this.cursor)
      if (isNullOrUndefined(this.cursor) || isNullOrUndefined(start) || isNullOrUndefined(stop)) return false
      return this.cursor >= start && this.cursor <= stop
    }
  }
}
