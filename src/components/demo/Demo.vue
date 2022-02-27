<template>
  <div>
    <DiagramFrame ref="diagram">
      <label>Hello world</label>
    </DiagramFrame>
    <button @click="exportPng">Export PNG</button>
  </div>
</template>

<script>
import DiagramFrame from "@/components/DiagramFrame";

const saveAs = (blob, fileName) =>{
  var elem = window.document.createElement('a');
  elem.href = blob
  elem.download = fileName;
  elem.style = 'display:none;';
  (document.body || document.documentElement).appendChild(elem);
  if (typeof elem.click === 'function') {
    elem.click();
  } else {
    elem.target = '_blank';
    elem.dispatchEvent(new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
  }
  URL.revokeObjectURL(elem.href);
  elem.remove()
}

export default {
  name: "Demo",
  methods: {
    async exportPng() {
      const png = await this.$refs.diagram.toPng();
      saveAs(png, 'diagram.png');
      console.log(png);
    }
  },
  components: {DiagramFrame}

}
</script>

<style scoped>

</style>
