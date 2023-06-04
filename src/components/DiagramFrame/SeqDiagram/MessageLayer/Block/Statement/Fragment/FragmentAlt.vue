<template>
  <div class="fragment alt border-skin-fragment rounded" :style="fragmentStyle">
    <div class="segment">
      <comment v-if="comment" :comment="comment" :commentObj="commentObj" />

      <div class="header bg-skin-fragment-header text-skin-fragment-header text-base leading-4 rounded-t" >
        <div class="name font-semibold p-1 border-b">
          <div style="display: flex; width: 100%; justify-content: space-between;" >
            <label class="p-0 mb-0">Alt</label>
            <svg width="16px" height="16px" :class="{hidden: collapsed}" @click="this.toggle()" class="cursor-pointer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="miter"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="14" y1="10" x2="21" y2="3"></line><polyline points="20 10 14 10 14 4"></polyline><line x1="3" y1="21" x2="10" y2="14"></line><polyline points="4 14 10 14 10 20"></polyline></g></svg>

            <svg width="16px" height="16px" viewBox="0 0 24 24" :class="{hidden: !collapsed}" @click="this.toggle()" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="expand"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="3 17.3 3 21 6.7 21" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" x1="10" x2="3.8" y1="14" y2="20.2"></line> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" x1="14" x2="20.2" y1="10" y2="3.8"></line> <polyline data-name="Right" fill="none" id="Right-3" points="21 6.7 21 3 17.3 3" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></polyline> </g> </g> </g> </g></svg>
          </div>
        </div>
      </div>
    </div>

    <div :class="{hidden: !collapsed}">
    <div class="segment">
      <div class="text-skin-fragment">
        <label class="condition p-1">[{{ condition }}]</label>
      </div>
      <block
        v-if="blockInIfBlock"
        :style="{ paddingLeft: `${offsetX}px` }"
        :context="blockInIfBlock"
        :selfCallIndent="selfCallIndent"
      ></block>
    </div>
    <template v-for="(elseIfBlock, index) in alt.elseIfBlock()" :key="index + 500">
      <div class="segment mt-2 border-t border-solid">
        <div class="text-skin-fragment" :key="index + 1000">
          <label class="else-if hidden">else if</label>
          <label class="condition p-1">[{{ conditionFromIfElseBlock(elseIfBlock) }}]</label>
        </div>
        <block
          :style="{ paddingLeft: `${offsetX}px` }"
          :context="blockInElseIfBlock(elseIfBlock)"
          :selfCallIndent="selfCallIndent"
          :key="index + 2000"
        ></block>
      </div>
    </template>
    <template v-if="elseBlock">
      <div class="segment mt-2 border-t border-solid">
        <div class="text-skin-fragment"><label class="p-1">[else]</label></div>
        <block
          :style="{ paddingLeft: `${offsetX}px` }"
          :context="elseBlock"
          :selfCallIndent="selfCallIndent"
        ></block>
      </div>
    </template>
  </div>
  </div>
</template>

<script>
import fragment from './FragmentMixin';

export default {
  name: 'fragment-alt',
  props: ['context', 'comment', 'selfCallIndent', 'commentObj'],
  mixins: [fragment],
  computed: {
    from: function () {
      return this.context.Origin();
    },
    alt: function () {
      return this.context.alt();
    },
    blockInIfBlock: function () {
      return this.alt?.ifBlock()?.braceBlock()?.block();
    },
    condition: function () {
      return this.conditionFromIfElseBlock(this.alt?.ifBlock());
    },
    elseBlock: function () {
      return this.alt?.elseBlock()?.braceBlock()?.block();
    },
  },
  data: function() {
    return {collapsed: true};
  },
  methods: {
    conditionFromIfElseBlock(ctx) {
      return ctx?.parExpr()?.condition()?.getFormattedText();
    },
    blockInElseIfBlock(ctx) {
      return ctx?.braceBlock()?.block();
    },
    toggle() {
      this.collapsed = !this.collapsed;
    }
  },
};
</script>

<style scoped>
/* We need to do this because tailwind 3.2.4 set border-color to #e5e7eb via '*'. */
* {
  border-color: inherit;
}
</style>
