export default {
  computed: {
    message: function () {
      return this.context?.message()
    },
    realFrom: function() {
      return this.func?.from()?.getCode() || this.from
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
      // The starting point is always this.from
      const moveTo = this.rightToLeft ? this.to : this.realFrom
      return this.distance(moveTo, this.from)
    },
    rightToLeft: function () {
      return this.distance(this.to, this.realFrom) < 0
    },
  }
}
