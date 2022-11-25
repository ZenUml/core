<template>
  <div class="fragment tcf" :style="fragmentStyle">
    <div class="segment">
      <comment v-if="comment" :comment="comment"/>

      <div class="header">
        <div class="name"><label>Try</label></div>
      </div>
<!-- fragment-offset set as offsetX - 1 for fragment border     -->
      <block v-if="blockInTryBlock"
             :style="{paddingLeft: `${offsetX}px`}"
             :context="blockInTryBlock"
             :selfCallIndent="selfCallIndent"
      ></block>
    </div>
    <template v-for="(catchBlock, index) in tcf.catchBlock()">
      <div class="segment mt-2 border-t border-solid" :key="index+500">
        <div class="header" :key="index+1000">
          <label class="keyword catch">catch</label><label class="exception">{{exception(catchBlock) }}</label>
        </div>
        <block :style="{paddingLeft: `${offsetX}px`}"
               :context="blockInCatchBlock(catchBlock)"
               :selfCallIndent="selfCallIndent"
               :key="index+2000"></block>
      </div>
    </template>
    <template v-if="finallyBlock">
      <div class="segment mt-2 border-t border-solid">
        <div class="header finally"><div><label class="keyword finally">finally</label></div></div>
        <block :style="{paddingLeft: `${offsetX}px`}"
               :context="finallyBlock"
               :selfCallIndent="selfCallIndent"
        ></block>
      </div>
    </template>
  </div>
</template>

<script>
  import fragment from './FragmentMixin'

  export default {
    name: 'fragment-tcf',
    props: ['context', 'comment', 'selfCallIndent'],
    mixins: [fragment],
    computed: {
      from: function() {
        return this.context.Origin()
      },
      tcf: function () {
        return this.context.tcf()
      },
      blockInTryBlock: function () {
        return this.tcf?.tryBlock()?.braceBlock()?.block()
      },
      finallyBlock: function () {
        return this.tcf?.finallyBlock()?.braceBlock()?.block()
      }
    },
    methods: {
      exception(ctx) {
        return ctx?.invocation()?.parameters().getText()
      },
      blockInCatchBlock(ctx) {
        return ctx?.braceBlock()?.block()
      }
    },
    beforeCreate: function () {
      this.$options.components.Block = require('../../Block.vue').default
      this.$options.components.Comment = require('../Comment/Comment.vue').default
    }
  }
</script>

