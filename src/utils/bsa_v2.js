export default class CA {
  constructor(w, h) {
    // Sizes
    this.w = w
    this.h = h
    this.iw = 150
    this.ih = 48

    // Options
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
        first: 25,
        second: 0,
        third: 0
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
      const d = (this.w - 32)/(767-32)

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

    else if (this.w < 1024) {
      // centers
      const cx = (this.w / 2 - this.iw / 2)
      const cy = (this.h - 40) / 2 + 34 - this.ih - 11.5
      // divisor
      const d = (this.w - 32)/(767-32)

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
    else if (this.w < 1280) {
      const xc = (this.w / 2 - this.iw / 2)
      const yc = (((this.h - 62) / 2 + 44)) - this.ih

      //1
      const f = (name) => ({
        //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),

        x: xc - (391 * Math.cos(this.opt.angle[name]) * (this.w / 1280)),
        y: yc + (114 * Math.sin(this.opt.angle[name]) * ((this.w / 1280))),
      })
      // Drupal
      const drupal = f('drupal')
      this.drupal.style.transform = `translate(
      ${drupal.x}px,
      ${drupal.y}px)`

      // //2
      // const s = (name) => ({
      //   x: this.opt.c.x - (496 * Math.cos(this.opt.angle[name])),
      //   y: this.opt.c.yl + (151 * Math.sin(this.opt.angle[name])),
      // })
      // // Shopify
      // const shopify = s('shopify')
      // this.shopify.style.transform = `translate(
      // ${shopify.x}px,
      // ${shopify.y}px)`
      // // Wix
      // const wix = s('wix')
      // this.wix.style.transform = `translate(
      // ${wix.x}px,
      // ${wix.y}px)`
      //
      // // Weebly
      // const weebly = s('weebly')
      // this.weebly.style.transform = `translate(
      // ${weebly.x}px,
      // ${weebly.y}px)`
      //
      // //3
      // const t = (name) => ({
      //   x: this.opt.c.x - (598 * Math.cos(this.opt.angle[name])),
      //   y: this.opt.c.yl + (188 * Math.sin(this.opt.angle[name])),
      // })
      //
      // // Wordpress
      // const wp = t('wp')
      // this.wp.style.transform = `translate(
      // ${wp.x}px,
      // ${wp.y}px)`
      //
      // // Squarespace
      // const ss = t('ss')
      // this.ss.style.transform = `translate(
      // ${ss.x}px,
      // ${ss.y}px)`


      //   // 1
      //   // Drupal
      //   this.ctx.drawImage(this.point,
      //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),
      //     (((this.h - 62) / 2) + 56) + ((-5 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 62) / 376)),
      //     this.point.width,
      //     this.point.height)
      //
      //   this.ctx.drawImage(this.drupal,
      //     -this.iw / 2 +
      //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),
      //     -(this.ih + 4) +
      //     (((this.h - 62) / 2) + 56) + ((-5 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 62) / 376)),
      //     this.iw,
      //     this.ih)
      //
      //   // 2
      //   // Shopify
      //   this.ctx.drawImage(this.point,
      //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 80) / 1200)),
      //     (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 62) / 376)),
      //     this.point.width,
      //     this.point.height)
      //
      //   this.ctx.drawImage(this.shopify,
      //     -this.iw / 2 +
      //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 80) / 1200)),
      //     -(this.ih + 4) +
      //     (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 62) / 376)),
      //     this.iw,
      //     this.ih)
      //
      //   // Weebly
      //   this.ctx.drawImage(this.point,
      //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 80) / 1200)),
      //     (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 62) / 376)),
      //     this.point.width,
      //     this.point.height)
      //
      //   this.ctx.drawImage(this.weebly,
      //     -this.iw / 2 +
      //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 80) / 1200)),
      //     -(this.ih + 4) +
      //     (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 62) / 376)),
      //     this.iw,
      //     this.ih)
      //
      //   // Wix
      //   this.ctx.drawImage(this.point,
      //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 80) / 1200)),
      //     (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 62) / 376)),
      //     this.point.width,
      //     this.point.height)
      //
      //   this.ctx.drawImage(this.wix,
      //     -this.iw / 2 +
      //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 80) / 1200)),
      //     -(this.ih + 4) +
      //     (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 62) / 376)),
      //     this.iw,
      //     this.ih)
      //
      //
      //   // 3
      //   // Squarespace
      //   this.ctx.drawImage(this.point,
      //     this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 80) / 1200)),
      //     (((this.h - 38) / 2) + 32) + ((6 + 176 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
      //     this.point.width,
      //     this.point.height)
      //
      //   this.ctx.drawImage(this.squarespace,
      //     -this.iw / 2 +
      //     this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 80) / 1200)),
      //     -(this.ih + 4) +
      //     (((this.h - 38) / 2) + 32) + ((6 + 176 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
      //     this.iw,
      //     this.ih)
      //
      //   // Wordpress
      //   this.ctx.drawImage(this.point,
      //     this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 80) / 1200)),
      //     (((this.h - 38) / 2) + 32) + ((6 + 176 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
      //     this.point.width,
      //     this.point.height)
      //
      //   this.ctx.drawImage(this.wordpress,
      //     -this.iw / 2 +
      //     this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 80) / 1200)),
      //     -(this.ih + 4) +
      //     (((this.h - 38) / 2) + 32) + ((6 + 176 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
      //     this.iw,
      //     this.ih)
      //
    } else {
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
    // ===================
    // else if (this.w >= 1080) {
    //
    //   // 1
    //   // Drupal
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((7 + 106 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.drupal,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((7 + 106 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 2
    //
    //   // Shopify
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 80) / 1200)),
    //     (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 62) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.shopify,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 80) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 62) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Weebly
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 80) / 1200)),
    //     (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 62) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.weebly,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 80) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 62) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wix
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 80) / 1200)),
    //     (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 62) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wix,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 80) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 62) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 3
    //   // Squarespace
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 80) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((7 + 175 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.squarespace,
    //     -this.iw / 2 +
    //     this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 80) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((7 + 175 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wordpress
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 80) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((7 + 175 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wordpress,
    //     -this.iw / 2 +
    //     this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 80) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((7 + 175 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    // } else if (this.w >= 1024) {
    //
    //   // 1
    //   // Drupal
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((8 + 105 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.drupal,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((8 + 105 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 2
    //   // Shopify
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 80) / 1200)),
    //     (((this.h - 62) / 2) + 56) + ((-7 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 62) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.shopify,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 80) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 62) / 2) + 56) + ((-7 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 62) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Weebly
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 80) / 1200)),
    //     (((this.h - 62) / 2) + 56) + ((-7 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 62) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.weebly,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 80) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 62) / 2) + 56) + ((-7 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 62) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wix
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 80) / 1200)),
    //     (((this.h - 62) / 2) + 56) + ((-7 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 62) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wix,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 80) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 62) / 2) + 56) + ((-7 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 62) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 3
    //   // Squarespace
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 80) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((8 + 174 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.squarespace,
    //     -this.iw / 2 +
    //     this.w / 2 - ((4 + +(600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 80) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((8 + 174 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wordpress
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 80) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((8 + 174 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wordpress,
    //     -this.iw / 2 +
    //     this.w / 2 - ((4 + +(600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 80) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((8 + 174 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    // } else if (this.w >= 940) {
    //
    //   // 1
    //   // Drupal
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-6 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.drupal,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-6 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 2
    //   // Shopify
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.shopify,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Weebly
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.weebly,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wix
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wix,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //
    //   // 3
    //   // Squarespace
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.squarespace,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wordpress
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wordpress,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    // } else if (this.w >= 850) {
    //
    //   // 1
    //   // Drupal
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-6 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.drupal,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-6 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 2
    //   // Shopify
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.shopify,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Weebly
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.weebly,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wix
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wix,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 3
    //   // Squarespace
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.squarespace,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wordpress
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wordpress,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    // } else if (this.w >= 768) {
    //
    //   // 1
    //   // Drupal
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.drupal,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 2
    //   // Shopify
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.shopify,
    //     -this.iw / 2 +
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Weebly
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.weebly,
    //     -this.iw / 2 +
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wix
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wix,
    //     -this.iw / 2 +
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 3
    //   // Squarespace
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.squarespace,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wordpress
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wordpress,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    // } else if (this.w >= 666) {
    //
    //   // 1
    //   // Drupal
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (391 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-8 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.drupal,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (391 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-8 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 2
    //   // Shopify
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.shopify,
    //     -this.iw / 2 +
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Weebly
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.weebly,
    //     -this.iw / 2 +
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Weebly
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wix,
    //     -this.iw / 2 +
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 3
    //   // Squarespace
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.squarespace,
    //     -this.iw / 2 +
    //     this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wordpress
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-7 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wordpress,
    //     -this.iw / 2 +
    //     this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-7 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    // } else if (this.w >= 564) {
    //
    //   // 1
    //   // Drupal
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((5 + (391 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-10 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.drupal,
    //     -this.iw / 2 +
    //     this.w / 2 - ((5 + (391 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-10 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 2
    //   // Shopify
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.shopify,
    //     -this.iw / 2 +
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Weebly
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.weebly,
    //     -this.iw / 2 +
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Weebly
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wix,
    //     -this.iw / 2 +
    //     this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 3
    //   // Squarespace
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.squarespace,
    //     -this.iw / 2 +
    //     this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wordpress
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wordpress,
    //     -this.iw / 2 +
    //     this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    // } else if (this.w >= 462) {
    //
    //   // 1
    //   // Drupal
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((7 + (390 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-10 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.drupal,
    //     -this.iw / 2 +
    //     this.w / 2 - ((7 + (390 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-10 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 2
    //   // Shopify
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.shopify,
    //     -this.iw / 2 +
    //     this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Weebly
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.weebly,
    //     -this.iw / 2 +
    //     this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //
    //   // Wix
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wix,
    //     -this.iw / 2 +
    //     this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 3
    //   // Squarespace
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((10 + (598 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.squarespace,
    //     -this.iw / 2 +
    //     this.w / 2 - ((10 + (598 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wordpress
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((10 + (598 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wordpress,
    //     -this.iw / 2 +
    //     this.w / 2 - ((10 + (598 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    // } else {
    //   // 1
    //   // Drupal
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((10 + (390 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-15 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.drupal,
    //     -this.iw / 2 +
    //     this.w / 2 - ((10 + (390 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-15 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // 2
    //   // Shopify
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-15 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.shopify,
    //     -this.iw / 2 +
    //     this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-15 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Weebly
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-15 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.weebly,
    //     -this.iw / 2 +
    //     this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-15 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wix
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-15 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wix,
    //     -this.iw / 2 +
    //     this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-15 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //
    //   // 3
    //   // Squarespace
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((10 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-15 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.squarespace,
    //     -this.iw / 2 +
    //     this.w / 2 - ((10 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-15 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    //
    //   // Wordpress
    //   this.ctx.drawImage(this.point,
    //     this.w / 2 - ((10 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     (((this.h - 38) / 2) + 32) + ((-15 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.point.width,
    //     this.point.height)
    //
    //   this.ctx.drawImage(this.wordpress,
    //     -this.iw / 2 +
    //     this.w / 2 - ((10 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
    //     -(this.ih + 4) +
    //     (((this.h - 38) / 2) + 32) + ((-15 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
    //     this.iw,
    //     this.ih)
    // }
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