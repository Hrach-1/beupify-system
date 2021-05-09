<template>
  <div class="canvas-wrapper">
    <div class="canvas-container" ref="cc" id="cc">

      <div id="logos">
<!--        1-->
        <div id="drupal">
          <img src="/images/drupal.svg" alt="drupal" class="logo">
          <img src="/images/point.svg" alt="" class="point">
        </div>

<!--        2-->
        <div id="shopify">
          <img src="/images/shopify.svg" alt="shopify" class="logo">
          <img src="/images/point.svg" alt="" class="point">
        </div>
        <div id="wix">
          <img src="/images/wix.svg" alt="wix" class="logo">
          <img src="/images/point.svg" alt="" class="point">
        </div>
        <div id="weebly">
          <img src="/images/weebly.svg" alt="weebly" class="logo">
          <img src="/images/point.svg" alt="" class="point">
        </div>

<!--        3-->
        <div id="wp">
          <img src="/images/wordpress.svg" alt="wordpress" class="logo">
          <img src="/images/point.svg" alt="" class="point">
        </div>
        <div id="ss">
          <img src="/images/squarespace.svg" alt="squarespace" class="logo">
          <img src="/images/point.svg" alt="" class="point">
        </div>

      </div>
      <img src="#" alt="bs" ref="bs" id="bs">
    </div>
  </div>
</template>

<script>
import CA from "../utils/bsa_v2";

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

      // Container Size
      if (window.innerWidth < 1280) {
        w = window.innerWidth - 2
      } else {
        w = cc.offsetWidth
      }
      h = cc.clientHeight

      this.ca = new CA(w, h)

      // Logo size
      if (window.innerWidth < 768) {
        this.ca.setImageSize = {w: 76, h: 34}
      } else if (window.innerWidth < 1024){
        this.ca.setImageSize = {w: 90, h: 40}
      } else {
        this.ca.setImageSize = {w: 150, h: 48}
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

        // Container size
        if (window.innerWidth < 1280) {
          this.ca.setSizes = {w: window.innerWidth - 2, h: cc.offsetHeight}
        } else {
          this.ca.setSizes = {w: cc.offsetWidth, h: cc.offsetHeight}
        }

        // BS size
        if (window.innerWidth < 768) {
          bs.src = this.xs
        } else {
          bs.src = this.l
        }

        // Logo size
        if (window.innerWidth < 768) {
          this.ca.setImageSize = {w: 76, h: 34}
        } else if (window.innerWidth < 1024){
          this.ca.setImageSize = {w: 90, h: 40}
        } else {
          this.ca.setImageSize = {w: 150, h: 48}
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

.canvas, #logos {
  position: absolute;
  top: 0;
  left: calc((100% - 1280px) / 2);
}

#logos {
  outline:3px solid red;
  width: 100%;
  /*height:436px;*/
}

#logos > div {
  display: inline-block;
  position: absolute;
}

#logos .logo {
  width: 150px;
}

#logos .point {
  width: 8px;
  display: flex;
  margin-top: 4px;
}

#drupal {
  /*transform: translate(200px);*/
  /*background-color: red;*/
  /*outline: 3px solid white;*/
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