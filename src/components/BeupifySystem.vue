<template>
  <div class="canvas-wrapper">
    <div class="canvas-container" ref="cc" id="cc">
      <img src="#" alt="bs" ref="bs" id="bs">
      <canvas class="canvas" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import CA from "../utils/beupify_system_animation";

export default {
  name: "BeupifySystem",
  data: () => ({
    l: '/images/beupify_system_l.svg',
    xs: '/images/beupify_system_xs.svg'
  }),
  mounted() {
    // BS
    const bs = this.$refs.bs
    const cc = this.$refs.cc

    if (window.innerWidth < 768) {
      bs.src = this.xs
    } else {
      bs.src = this.l
    }

    setTimeout(() => {
      let w, h
      if (window.innerWidth < 1280) {
        w = window.innerWidth - 2
      } else {
        w = cc.offsetWidth
      }
      h = cc.clientHeight
      const canvas = this.$refs.canvas
      canvas.width = w
      canvas.height = h
      this.ca = new CA(canvas, w, h)
      if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        this.ca.setImageSizes = {w: 90, h: 28}
      } else if(window.innerWidth < 768) {
        this.ca.setImageSizes = {w: 76, h: 24}
      } else {
        this.ca.setImageSizes = {w: 150, h: 48}
      }
      this.ca.animate()
    }, 50)

    window.addEventListener("resize", this.canvasResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.canvasResize);
  },
  methods: {
    canvasResize() {
      setTimeout(() => {
        const bs = document.querySelector('#bs')
        const cc = document.querySelector('#cc')
        if (window.innerWidth < 1280) {
          this.ca.setCanvas = {w: window.innerWidth - 2, h: cc.offsetHeight}
        } else {
          this.ca.setCanvas = {w: cc.offsetWidth, h: cc.offsetHeight}
        }
        if (window.innerWidth < 768) {
          bs.src = this.xs
        } else {
          bs.src = this.l
        }
        if (window.innerWidth < 1024) {
          this.ca.setImageSizes = {w: 74, h: 24}
        } else {
          this.ca.setImageSizes = {w: 150, h: 48}
        }
      }, 50)
    }
  }
}
</script>

<style scoped>
.canvas-wrapper {
  margin: 0;
  display: flex;
}

.canvas-container {
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
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
  left: calc((100% - 1280px) / 2);
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