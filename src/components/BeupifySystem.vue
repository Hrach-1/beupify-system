<template>
  <div class="canvas_container">
    <canvas class="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
import CA from "../utils/curve_animator_upgraded";


export default {
  name: "BeupifySystem",
  data: () => ({
    ca: '',
    l: '/images/beupify_system_l.svg',
    m: '/images/beupify_system_m.svg',
    s: '/images/beupify_system_s.svg',
    xs: '/images/beupify_system_xs.svg'
  }),
  mounted() {
    const w = window.innerWidth

    window.addEventListener("resize", this.canvasResize);
    const canvas = this.$refs.canvas
    let img
    this.ca = new CA(canvas, 1280, 440)
    if (w >= 1280) {
      this.ca.setCanvas = {w: 1280, h: 440}
      img = new Image(1200, 376)
      img.src = this.l
    }
    else if (w >= 1024 ){
      this.ca.setCanvas = {w, h: Math.floor((w-80)/(944/296))+64}
      img = new Image(944, 296)
      img.src = this.m
    }
    else if (w >= 768 ) {
      this.ca.setCanvas = {w, h: Math.floor((w-32)/(736/232))+40}
      img = new Image(736, 232)
      img.src = this.s
    }
    else {
      this.ca.setCanvas = {w, h: Math.floor((w-32)/(328/128))+40}
      img = new Image(328, 128)
      img.src = this.xs
    }
    this.ca.setSystemImg = img
    this.ca.animate()
  },
  unmounted() {
    window.removeEventListener("resize", this.canvasResize);
  },
  methods: {
    canvasResize(e) {
      const w = e.target.innerWidth
      let img
      if (w >= 1280) {
        this.ca.setCanvas = {w: 1280, h: 534}
        img = new Image(1200, 376)
        img.src = this.l
      }
      else if (w >= 1024 ){
        this.ca.setCanvas = {w, h: Math.floor((w-80)/(944/296))+56}
        img = new Image(944, 296)
        img.src = this.m
      }
      else if (w >= 768 ) {
        this.ca.setCanvas = {w, h: Math.floor((w-32)/(736/232))+32}
        img = new Image(736, 232)
        img.src = this.s
      }
      else {
        this.ca.setCanvas = {w, h: Math.floor((w-32)/(328/128))+32}
        img = new Image(328, 128)
        img.src = this.xs
      }
      this.ca.setSystemImg = img
    }
  }
}
</script>

<style scoped>
.canvas_container *{
  margin: 0;
  padding: 0;
}

.canvas {
  max-width: 1280px;
  width:  100%;
  max-height: 476px;
  height: 100%;
  /*border:1px solid black;*/
}

.thumbnail img {
  position: absolute;
  top:10px;
  left: 10px;
  max-width: 1200px;
  max-height: 366px;
  width: 100%;
  height: 100%;
}
</style>