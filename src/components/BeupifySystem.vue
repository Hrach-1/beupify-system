<template>
  <div class="canvas-wrapper">
    <div class="canvas-container" ref="cc" id="cc">
      <img src="#" alt="bs" ref="bs" id="bs">
      <canvas class="canvas" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import CA from "../utils/curve_animator_upgraded";


export default {
  name: "BeupifySystem",
  data: () => ({
    l: '/images/beupify_system_l.svg',
    m: '/images/beupify_system_m.svg',
    s: '/images/beupify_system_s.svg',
    xs: '/images/beupify_system_xs.svg'
  }),
  mounted() {
    // BS
    const bs = this.$refs.bs
    bs.src = this.xs

    const cc = this.$refs.cc

    if (window.innerWidth <768) {
      bs.src = this.xs
    } else {
      bs.src = this.l
    }

    setTimeout(() => {
      let w,h
      if (window.innerWidth < 1280) {
        w = window.innerWidth -2
      } else {
        w = cc.offsetWidth
      }
      h = cc.clientHeight

      const canvas = this.$refs.canvas
      canvas.width = w
      canvas.height = h
      this.ca = new CA(canvas, w, h)
      this.ca.animate()
    }, 50)

    window.addEventListener("resize", this.canvasResize);

    // if(w > )
    // canvas.width


    // if (w >= 1280) {
    //   // this.ca.setCanvas = {w: 1280, h: 440}
    //   bs.src = this.l
    // }
    // else if (w >= 1024 ){
    //   // this.ca.setCanvas = {w, h: Math.floor((w-80)/(944/296))+64}
    //   bs.src = this.m
    // }
    // else if (w >= 768 ) {
    //   // this.ca.setCanvas = {w, h: Math.floor((w-32)/(736/232))+40}
    //   bs.src = this.s
    // }
    // else {
    //   // this.ca.setCanvas = {w, h: Math.floor((w-32)/(328/128))+40}
    //   bs.src = this.xs
    // }
    // this.ca.setSystemImg = img
    // this.ca.animate()
  },
  unmounted() {
    // window.removeEventListener("resize", this.canvasResize);
  },
  methods: {
    canvasResize() {
      // console.log(this.$refs.cc)
      // console.log('Canvas Resize ')
      // console.log(this.$refs.cc)
      // console.log('======================')
      setTimeout(() => {
        const bs = document.querySelector('#bs')
        const cc = document.querySelector('#cc')
        if (window.innerWidth < 1280) {
          this.ca.setCanvas = {w: window.innerWidth - 2, h:cc.offsetHeight}
        } else {
          this.ca.setCanvas = {w: cc.offsetWidth  , h:cc.offsetHeight}
        }
        if (window.innerWidth <768) {
          bs.src = this.xs
        } else {
          bs.src = this.l
        }
      }, 50)
    }

    /*canvasResize(e) {*/
    /*  const w = e.target.innerWidth*/
    /*  let img*/
    /*  if (w >= 1280) {*/
    /*    this.ca.setCanvas = {w: 1280, h: 534}*/
    /*    img = new Image(1200, 376)*/
    /*    img.src = this.l*/
    /*  }*/
    /*  else if (w >= 1024 ){*/
    /*    this.ca.setCanvas = {w, h: Math.floor((w-80)/(944/296))+56}*/
    /*    img = new Image(944, 296)*/
    /*    img.src = this.m*/
    /*  }*/
    /*  else if (w >= 768 ) {*/
    //     this.ca.setCanvas = {w, h: Math.floor((w-32)/(736/232))+32}
    //     img = new Image(736, 232)
    //     img.src = this.s
    //   }
    //   else {
    //     this.ca.setCanvas = {w, h: Math.floor((w-32)/(328/128))+32}
    //     img = new Image(328, 128)
    //     img.src = this.xs
    //   }
    //   this.ca.setSystemImg = img
    // }
  }
}
</script>

<style scoped>
.canvas-wrapper {
  margin: 0;
  display: flex;
  /*background-color: red;*/
}

.canvas-container{
  /*border: 1px solid black;*/
  box-sizing: border-box;
  display: flex;
  margin:0 auto;
  max-width: 1280px;
  width: 100%;
  position: relative;
  background-color: #1E1939;
  padding: 56px 6px 6px 6px;
}

.canvas-container img {
  max-width: 1200px;
  max-height: 376px;
  width: 100%;
  height: 100%;
  margin: auto;
}

.canvas {
  position: absolute;
  top: 0;
  left: calc((100% - 1280px)/2);
  border: 1px solid black;
}


@media only screen and (max-width: 1279px) {
  .canvas {
    left: 0;
  }
  .canvas-container {
    padding: 56px 0 6px 0;
    position: static;
  }
  .canvas-wrapper {
    padding: 0 40px;
    position: relative;
    background-color: #1E1939;
  }
}

@media only screen and (max-width: 1023px) {
  .canvas-container {
    padding: 32px 0 6px 0;
  }
  .canvas-wrapper {
    padding: 0 16px;
  }
}


</style>