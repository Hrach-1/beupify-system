export default class CA {
  constructor(w, h) {
    // sizes
    this.w = w
    this.h = h
    this.iw = 150
    this.ih = 48

    // options
    this.opt = {
      angle: {
        // 3
        drupal: -0.4 * Math.PI,

        // 2
        wix: 0.2 * Math.PI,
        weebly: Math.PI,
        shopify: -0.65 * Math.PI,

        // 1
        ss: -0.15 * Math.PI,
        wp: 0.7 * Math.PI,
      },
      speed: {
        first: 7,
        second: 7,
        third: 7
      }
    }

    // images
    this.drupal = document.querySelector('#drupal')
    this.shopify = document.querySelector('#shopify')
    this.wix = document.querySelector('#wix')
    this.weebly = document.querySelector('#weebly')
    this.wp = document.querySelector('#wp') // Wordpress
    this.ss = document.querySelector('#ss') // Squarespace

    this.logos = document.getElementById('logos')
    this.logos_img = this.logos.querySelectorAll('.logo')
  }

  set setSizes({w, h}) {
    this.logos.style.width = w + 'px'
    this.logos.style.height = h + 'px'

    this.w = w
    this.h = h
  }

  set setImageSize({w, h}) {
    this.iw = w
    this.ih = h
    this.logos_img.forEach(el => {
      el.style.width = w + 'px'
      el.style.height = h + 'px'
    })
  }

  update() {
    // 3
    this.opt.angle.drupal += Math.PI * (this.opt.speed.third / 10000)

    // 2
    this.opt.angle.wix += Math.PI * (this.opt.speed.second / 10000)
    this.opt.angle.shopify += Math.PI * (this.opt.speed.second / 10000)
    this.opt.angle.weebly += Math.PI * (this.opt.speed.second / 10000)

    // 1
    this.opt.angle.ss += Math.PI * (this.opt.speed.first / 10000)
    this.opt.angle.wp += Math.PI * (this.opt.speed.first / 10000)
  }

  render() {

    if (this.w < 768) {
      // centers
      const cx = (this.w / 2 - this.iw / 2)
      const cy = (this.h - 40) / 2 + 34 - this.ih - 11.5
      // divisor
      const d = (this.w - 32) / (767 - 32)

      //1
      const f = (name) => ({
        x: cx - ((240 * Math.cos(this.opt.angle[name]) * d)),
        y: cy + ((86 * Math.sin(this.opt.angle[name])) * d),
      })
      // drupal
      const drupal = f('drupal')
      this.drupal.style.transform = `translate(
      ${drupal.x}px,
      ${drupal.y}px)`

      //2
      const s = (name) => ({
        x: cx - ((304 * Math.cos(this.opt.angle[name]) * d)),
        y: cy + ((114 * Math.sin(this.opt.angle[name])) * d),
      })
      // wix
      const wix = s('wix')
      this.wix.style.transform = `translate(
      ${wix.x}px,
      ${wix.y}px)`
      // weebly
      const weebly = s('weebly')
      this.weebly.style.transform = `translate(
      ${weebly.x}px,
      ${weebly.y}px)`
      // shopify
      const shopify = s('shopify')
      this.shopify.style.transform = `translate(
      ${shopify.x}px,
      ${shopify.y}px)`

      //3
      const t = (name) => ({
        x: cx - ((367 * Math.cos(this.opt.angle[name]) * d)),
        y: cy + ((142 * Math.sin(this.opt.angle[name])) * d),
      })
      // wordpress
      const wp = t('wp')
      this.wp.style.transform = `translate(
      ${wp.x}px,
      ${wp.y}px)`
      // squarespace
      const ss = t('ss')
      this.ss.style.transform = `translate(
      ${ss.x}px,
      ${ss.y}px)`
    }
    // =================================
    else if (this.w < 1024) {
      // centers
      const cx = (this.w / 2 - this.iw / 2)
      const cy = (this.h - 44) / 2 + 38 - this.ih - 12.5
      // divisor
      const d = (this.w - 32) / (1023 - 32)

      //1
      const f = (name) => ({
        x: cx - ((324 * Math.cos(this.opt.angle[name])) * d),
        y: cy + ((94 * Math.sin(this.opt.angle[name])) * d),
      })
      // drupal
      const drupal = f('drupal')
      this.drupal.style.transform = `translate(
      ${drupal.x}px,
      ${drupal.y}px)`

      //2
      const s = (name) => ({
        x: cx - ((410 * Math.cos(this.opt.angle[name]) * d)),
        y: cy + ((124 * Math.sin(this.opt.angle[name])) * d),
      })
      // wix
      const wix = s('wix')
      this.wix.style.transform = `translate(
      ${wix.x}px,
      ${wix.y}px)`
      // weebly
      const weebly = s('weebly')
      this.weebly.style.transform = `translate(
      ${weebly.x}px,
      ${weebly.y}px)`
      // shopify
      const shopify = s('shopify')
      this.shopify.style.transform = `translate(
      ${shopify.x}px,
      ${shopify.y}px)`

      //3
      const t = (name) => ({
        x: cx - ((496 * Math.cos(this.opt.angle[name]) * d)),
        y: cy + ((154 * Math.sin(this.opt.angle[name])) * d),
      })
      // wordpress
      const wp = t('wp')
      this.wp.style.transform = `translate(
      ${wp.x}px,
      ${wp.y}px)`
      // squarespace
      const ss = t('ss')
      this.ss.style.transform = `translate(
      ${ss.x}px,
      ${ss.y}px)`
    }
    // ====================
    else if (this.w < 1280) {
      // centers
      const cx = (this.w / 2 - this.iw / 2)
      const cy = (this.h - 64) / 2 + 58 - this.ih - 12.5
      // divisor
      const d = (this.w - 80) / (1279 - 80)

      //1
      const f = (name) => ({
        x: cx - ((391 * Math.cos(this.opt.angle[name])) * d),
        y: cy + ((114 * Math.sin(this.opt.angle[name])) * d),
      })
      // drupal
      const drupal = f('drupal')
      this.drupal.style.transform = `translate(
      ${drupal.x}px,
      ${drupal.y}px)`

      //2
      const s = (name) => ({
        x: cx - ((496 * Math.cos(this.opt.angle[name]) * d)),
        y: cy + ((151 * Math.sin(this.opt.angle[name])) * d),
      })
      // wix
      const wix = s('wix')
      this.wix.style.transform = `translate(
      ${wix.x}px,
      ${wix.y}px)`
      weebly
      const weebly = s('weebly')
      this.weebly.style.transform = `translate(
      ${weebly.x}px,
      ${weebly.y}px)`
      // shopify
      const shopify = s('shopify')
      this.shopify.style.transform = `translate(
      ${shopify.x}px,
      ${shopify.y}px)`

      //3
      const t = (name) => ({
        x: cx - ((598 * Math.cos(this.opt.angle[name]) * d)),
        y: cy + ((187 * Math.sin(this.opt.angle[name])) * d),
      })
      // wordpress
      const wp = t('wp')
      this.wp.style.transform = `translate(
      ${wp.x}px,
      ${wp.y}px)`
      // squarespace
      const ss = t('ss')
      this.ss.style.transform = `translate(
      ${ss.x}px,
      ${ss.y}px)`
    }
    // =====================
    else {
      const xc = (this.w / 2 - this.iw / 2)
      const yc = (((this.h - 62) / 2 + 44)) - this.ih

      //1
      const f = (name) => ({
        x: xc - (391 * Math.cos(this.opt.angle[name])),
        y: yc + (114 * Math.sin(this.opt.angle[name])),
      })
      // Drupal
      const drupal = f('drupal')
      this.drupal.style.transform = `translate(
      ${drupal.x}px,
      ${drupal.y}px)`

      //2
      const s = (name) => ({
        x: xc - (496 * Math.cos(this.opt.angle[name])),
        y: yc + (151 * Math.sin(this.opt.angle[name])),
      })
      // Shopify
      const shopify = s('shopify')
      this.shopify.style.transform = `translate(
      ${shopify.x}px,
      ${shopify.y}px)`
      // Wix
      const wix = s('wix')
      this.wix.style.transform = `translate(
      ${wix.x}px,
      ${wix.y}px)`

      // Weebly
      const weebly = s('weebly')
      this.weebly.style.transform = `translate(
      ${weebly.x}px,
      ${weebly.y}px)`

      //3
      const t = (name) => ({
        x: xc - (598 * Math.cos(this.opt.angle[name])),
        y: yc + (188 * Math.sin(this.opt.angle[name])),
      })

      // Wordpress
      const wp = t('wp')
      this.wp.style.transform = `translate(
      ${wp.x}px,
      ${wp.y}px)`

      // Squarespace
      const ss = t('ss')
      this.ss.style.transform = `translate(
      ${ss.x}px,
      ${ss.y}px)`
    }
  }

  animation() {
    requestAnimationFrame(this.animation.bind(this))
    this.update()
    this.render()
  }

  animate() {
    requestAnimationFrame(this.animation.bind(this))
  }
}