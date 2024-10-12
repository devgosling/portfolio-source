<template>
  <div>
    <div :style="getGradientPos()" />
    <RouterView class="routerview" />
  </div>
</template>
<script> 
import { RouterView } from 'vue-router';

export default {
  components: {
    RouterView
  },

  data() {
    return {
      mouseX: 0,
      mouseY: 0
    }
  },

  methods: {
    getGradientPos() {
      return {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        'z-index': 30,
        'pointer-events': 'none',
        'background': `radial-gradient(600px at ${this.mouseX}px ${this.mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }
    }
  },

  mounted() {
    document.onmousemove = (event) => {
      let gradient = document.getElementById("radial-gradient-mouse")
      this.mouseX = event.clientX
      this.mouseY = event.clientY
    }

  }
}
</script>
<style lang="scss">
.routerview {
  max-width: 79.8vw;
  padding: 0 10.2vw;
  margin: 0 10.2vw;
}
</style>