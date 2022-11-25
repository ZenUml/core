<template>
  <div class="message border-b-2 flex items-end"
       :class="{ 'flex-row-reverse': rtl,
          'return': type === 'return',
          'right-to-left':rtl, 'text-left': isAsync, 'text-center': !isAsync }"
       :style="{'border-bottom-style': borderStyle}">
    <div class="name flex-grow truncate hover:whitespace-normal hover:bg-yellow-300"
         :style="{color: color}"
         style="padding-left: 10px; float: left">{{content}}</div>
    <point class="flex-shrink-0 transform translate-y-1/2 -my-px" :fill="fill" :rtl="rtl"/>
  </div>
</template>

<script type="text/babel">
  import Point from './Point'

  // async: open arrow head.
  // sync: filled arrow head.
  // reply: dashed line with either an open or filled arrow head.
  // creation: a dashed line with an open arrow head.
  export default {
    name: 'message',
    props: ['content', 'rtl', 'type', 'color'],
    computed: {
      isAsync: function () {
        return this.type === 'async'
      },
      borderStyle () {
        switch (this.type) {
          case 'sync':
          case 'async':
            return 'solid'
          case 'creation':
          case 'return':
            return 'dashed'
        }
        return ''
      },
      fill () {
        switch (this.type) {
          case 'sync':
          case 'async':
            return true
          case 'creation':
          case 'return':
            return false
        }
        return false
      }
    },
    components: {
      Point
    }
  }
</script>
