<!--TODO: this can be implemented without globally calculated width!-->
<template>
  <div class="interaction creation sync text-center"
       v-on:click.stop="onClick"
       v-on:mouseover.stop="mouseOver"
       v-on:mouseout.stop="mouseOut"
       :signature="signature"
       :class="{ 'right-to-left':rightToLeft, 'highlight': isCurrent, 'hover': hover }"
       :style="style">
    <comment v-if="comment" :comment="comment" />
    <!-- h-10 to push occurrence down -->
    <div class="message-container h-10">
      <!-- TODO: replace the following with a participant component. -->
      <div ref="participantPlaceHolder"
           class="participant absolute invisible right-0 flex flex-col justify-center">
        <!-- Put in a div to give it a fixed height, because stereotype is dynamic. -->
        <div class="h-5 flex flex-col justify-center">
          <label class="name">{{ to }}</label>
        </div>
      </div>
      <message ref="messageEl" class="invocation" :content="signature" :rtl="rightToLeft" type="creation"/>
    </div>
    <occurrence :context="creation" :participant="to"/>
    <message class="return" v-if="assignee" :content="assignee" :rtl="!rightToLeft" type="return"/>
  </div>
</template>

<script type="text/babel" lang="ts">
  import Vue from "vue";
  import {mapGetters} from 'vuex'
  import Comment from '../Comment.vue'
  import Message from '../Message.vue'
  import Occurrence from '../Occurrence.vue'
  import {CodeRange} from '@/parser/CodeRange'

  interface Style {
    width: string;
    transform: string;
  }

  // Add below code sample to your component
  declare module 'vue/types/vue' {

    interface Vue {
      hover: boolean;
      interactionWidth: number;
      style: Style;
      creation: {
        SignatureText: () => string;
        creationBody: () => {assignment: () => {
          assignee: () => string;
          type: () => string;
          }};
        Owner: () => string;
        isCurrent: (cursor: number) => boolean;
      }
      layoutMessageContainer: () => void;
    }
  }

  export default Vue.extend({
    name: 'creation',
    data() {
      return {
        hover: false
      }
    },
    props: ['context', 'comment', 'selfCallIndent'],
    computed: {
      ...mapGetters(['cursor', 'onElementClick', 'distance']),
      style(): Style {
        const ret = {
          width: this.interactionWidth + 'px'
        } as Style;
        if (!this.rightToLeft) {
          ret.transform = 'translateX(' + 0 + 'px)'
        } else {
          ret.transform = 'translateX(calc(-100% + ' + 0 + 'px))'
        }
        return ret
      },
      from(): string {
        return this.context.Origin()
      },
      creation(): any {
        return this.context.creation()
      },
      interactionWidth(): number{
        let distance = Math.abs(this.distance(this.to, this.from))
        let safeOffset = this.selfCallIndent || 0
        return distance + (this.rightToLeft ? safeOffset : (-safeOffset));
      },
      rightToLeft: function () {
        return this.distance(this.to, this.from) < 0
      },
      signature(): string {
        return this.creation.SignatureText() as string
      },
      assignee: function () {
        function safeCodeGetter (context: any) {
          return (context && context.getTextWithoutQuotes()) || ''
        }
        let assignment = this.creation.creationBody().assignment()
        if (!assignment) return ''
        let assignee = safeCodeGetter(assignment.assignee())
        const type = safeCodeGetter(assignment.type())
        return assignee + (type ? ':' + type : '')
      },
      to(): string {
        return this.creation.Owner()
      },
      isCurrent(): boolean {
        return this.creation.isCurrent(this.cursor)
      }
    },
    mounted() {
      this.layoutMessageContainer()
    },
    updated() {
      this.layoutMessageContainer()
    },
    methods: {
      layoutMessageContainer() {
        if (!this.$refs.participantPlaceHolder || !this.$refs.messageEl) return
        const halfWidthOfPlaceholder = (this.$refs['participantPlaceHolder'] as HTMLElement).offsetWidth / 2;
        const placeHolderStyle = (this.$refs['participantPlaceHolder'] as HTMLElement).style;
        placeHolderStyle.marginRight = (-1) * (halfWidthOfPlaceholder + 6) + 'px';
        ((this.$refs['messageEl'] as Vue).$el as HTMLElement).style.width = `calc(100% - ${halfWidthOfPlaceholder - 6}px`;
      },
      onClick() {
        this.onElementClick(CodeRange.from(this.context))
      },
      mouseOver() {
        this.hover = true
      },
      mouseOut() {
        this.hover = false
      }
    },
    components: {
      Comment,
      Occurrence,
      Message
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .interaction.creation.right-to-left {
    transform: translateX(-100%);
  }

  .participant.place-holder {
    margin-top: -19px;
    white-space: nowrap;
  }

  .creation.right-to-left > .message-container > .message.invocation {
    /* 3 = (15:occurrenceWidth - 1) / 2 - 5:InteractionBorderWidth
    We can also set right: 3px; but we will also need to reset left: auto */
    left: -2px;
    /* moving .message to the right so that margin will take up the "available" space. It works like float: right.
       But this won't remove .message from the flow.
     */
    margin-left: auto;
  }

  .right-to-left > .occurrence {
    left: -8px;
  }

</style>
