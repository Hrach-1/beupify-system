<template>
  <div class="canvas-wrapper">
    <div class="canvas-container" ref="cc" id="cc">

      <div id="logos" ref="logos">
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
import CA from "../utils/bsa";

export default {
  name: "BeupifySystem",
  data: () => ({
    l: '/images/bs_l.svg',
    xs: '/images/bs_xs.svg'
  }),
  mounted() {
    // bs
    const bs = this.$refs.bs
    const cc = this.$refs.cc
    const logos = this.$refs.logos

    if (window.innerWidth < 768) {
      bs.src = this.xs
    } else {
      bs.src = this.l
    }

    setTimeout(() => {
      let w, h

      // container size
      if (window.innerWidth < 1280) {
        w = window.innerWidth
      } else {
        w = cc.offsetWidth
      }
      h = cc.clientHeight
      logos.style.width = w + 'px'
      logos.style.height = h + 'px'
      this.ca = new CA(w, h)

      // logo size
      if (window.innerWidth < 768) {
        this.ca.setImageSize = {w: 76, h: 24}
      } else if (window.innerWidth < 1024) {
        this.ca.setImageSize = {w: 90, h: 28}
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

        // container size
        if (window.innerWidth < 1280) {
          this.ca.setSizes = {w: window.innerWidth, h: cc.offsetHeight}
        } else {
          this.ca.setSizes = {w: cc.offsetWidth, h: cc.offsetHeight}
        }

        // bs size
        if (window.innerWidth < 768) {
          bs.src = this.xs
        } else {
          bs.src = this.l
        }

        // logo size
        if (window.innerWidth < 768) {
          this.ca.setImageSize = {w: 76, h: 24}
        } else if (window.innerWidth < 1024) {
          this.ca.setImageSize = {w: 90, h: 28}
        } else {
          this.ca.setImageSize = {w: 150, h: 48}
        }
      }, 50)
    }
  }
}
</script>

<style scoped>

@media only screen and (min-width: 360px) {
  #logos > div {
    display: inline-block;
    position: absolute;
  }

  #logos .point {
    width: 6px;
    display: flex;
    margin-top: 4px;
  }

  #logos {
    position: absolute;
    top: 0;
    left: 0;
  }

  .canvas-wrapper {
    margin: 0;
    display: flex;
    background-color: #1E1939;
    position: relative;
    padding: 0 16px;
  }

  .canvas-container {
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
    background-color: #1E1939;
    padding: 34px 0 6px 0;
  }

  .canvas-container img {
    max-width: 1200px;
    max-height: 376px;
    width: 100%;
    height: 100%;
    margin: auto;
  }
}

/*==============*/

@media only screen and (min-width: 768px) {
  .canvas-container {
    padding: 38px 0 6px 0;
  }

  #logos .point {
    width: 8px;
  }
}

/*==============*/

@media only screen and (min-width: 1024px) {
  .canvas-container {
    padding: 58px 0 6px 0;
  }

  .canvas-wrapper {
    padding: 0 40px;
  }
}

/*==============*/

@media only screen and (min-width: 1280px) {
  .canvas-wrapper {
    position: static;
  }

  .canvas-container {
    position: relative;
  }
}

</style>