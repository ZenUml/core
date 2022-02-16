<template>
  <!-- pr-24 to give space for the right most participant.
  TODO: we may need to consider the width of self message on right most participant. -->
  <div class="message-layer pt-24 pb-1 pr-24">
    <block :context="context" :style="{'padding-left': paddingLeft + 'px'}"/>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
  import Block from './Block'

  export default {
    name: 'message-layer',
    props: ['context'],
    data() {
      return {
        left: 0,
        right: 0,
        totalWidth: 0
      }
    },
    computed: {
      ...mapGetters(['participants', 'centerOf']),
      paddingLeft() {
        if (this.participants.Array().length >= 1) {
          const first = this.participants.Array().slice(0)[0].name;
          return this.centerOf(first) - 1;
        }
        return 0;
      }
    },
    methods: {
      ...mapMutations(['onMessageLayerMountedOrUpdated']),

      participantNames() {
        // According to the doc, computed properties are cached.
        return this.participants.Names()
      },
    },
    components: {
      Block
    }
  }
</script>

<style>
  /* Avoid moving interaction to the left or right with margins.
  We can always assume that an interaction's border is the lifeline.
  Moving content with padding is OK.
   */
  .interaction {
    position: relative;   /* To provide width for .return */
    margin-top: 5px;     /* To create some margin for cosmetic only */
    /*Keep dashed here otherwise no space is given to the border*/
    border: 5px dashed transparent;
  }

  .interaction:hover {
    cursor: pointer;
  }

  .message {
    position: relative;   /* positioning Point */
  }

  /* Attach to the end of the occurrence */
  .message.return {
    position: absolute;
    bottom: 0;
  }

  .message>.name {
    font-size: 13px;
    text-align: center;
  }

  .message svg {
    position: absolute;
    width: 10px;
  }

  .message.self svg {
    width: 40px;
  }

  .occurrence {
    position: relative;
    width: 15px;
    left: calc(100% - 2px);   /* This 100% will only consider the content width of interaction. */
    padding: 16px 0;          /* Provide default height for the occurrence bar */
    padding-left: 5px;        /* (OccurrenceWidth-1)/2 - OccurrenceBorderWidth*/
    border-width: 2px;
  }

  .interaction.right-to-left > .occurrence {
    /* InteractionBorderWidth + (OccurrenceWidth-1)/2 */
    left: -12px;               /* overlay occurrence bar on the existing bar. */
  }

  .interaction.self > .occurrence {
    /* width of InteractionBorderWidth 5px + lifeline center 1px */
    left: -6px;               /* overlay occurrence bar on the existing bar. */
    margin-top: -10px;
  }

  .fragment {
    border-width: 1px;
    margin: 2px 0;
  }

  .fragment .header label {
    padding: 0 10px;
  }
  .fragment .header .name label {
    padding: 0 10px;
    background: rgba(170, 170, 170, 0.1);
  }
</style>
