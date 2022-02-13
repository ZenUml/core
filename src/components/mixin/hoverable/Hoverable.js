export default {
  data() {
    return {
      hover: false
    };
  },
  methods: {
    mouseOver() {
      this.hover = true;
    },
    mouseOut() {
      this.hover = false;
    }
  }
}
