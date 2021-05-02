<template>
  <div>
    <div class="thumbnail">
<!--      <img src="../../public/expanded.svg" alt="beupify_system">-->
    </div>
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
    m: '/images/beupify_system_m.png',
    s: '/images/beupify_system_s.png',
    xs: '/images/beupify_system_xs.png'
  }),
  mounted() {
    const w = window.innerWidth

    window.addEventListener("resize", this.canvasResize);
    const canvas = this.$refs.canvas
    let img
    this.ca = new CA(canvas)
    if (w >= 1280) {
      canvas.width = 1280;
      canvas.height = 416;
      img = new Image(1200, 376)
      img.src = this.l
    }
    else if (w >= 1024 ){
      canvas.width =  1000;
      canvas.height = 324;
      img = new Image(944, 296)
      img.src = this.m
    }
    else if (w >= 768 ) {
      canvas.width = 0;
      canvas.height = 0;
      img = new Image(736, 232)
      img.src = this.s
    }
    else if (w >= 360 ) {
      canvas.width = ;
      canvas.height = ;
      img = new Image(328, 128)
      img.src = this.xs
    }
    this.ca.setSystemImg = img
    this.ca.animate()
    console.log('Img: ', new Image(1200, 376).src = this.l)
  },
  unmounted() {
    window.removeEventListener("resize", this.canvasResize);
  },
  methods: {
    canvasResize(e) {
      const w = e.target.innerWidth
      let img
      if (w >= 1280) {
        canvas.width = ;
        canvas.height = ;
        img = new Image(1200, 376)
        img.src = this.l
      }
      else if (w >= 1024 ){
        canvas.width = ;
        canvas.height = ;
        img = new Image(944, 296)
        img.src = this.m
      }
      else if (w >= 768 ) {
        canvas.width = ;
        canvas.height = ;
        img = new Image(736, 232)
        img.src = this.s
      }
      else if (w >= 360 ) {
        canvas.width = ;
        canvas.height = ;
        img = new Image(328, 128)
        img.src = this.xs
      }
      this.ca.setSystemImg = img
    }
  }
}
</script>

<style scoped>
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