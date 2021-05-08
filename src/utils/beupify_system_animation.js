export default class CA {
  constructor(canvas, w, h) {
    this.c = canvas
    this.ctx = this.c.getContext('2d')
    this.opt = {
      pts: 0,
      angle: {
        // 3
        drupal: -0.4 * Math.PI,

        // 2
        wix: 0.2 * Math.PI,
        weebly: Math.PI,
        shopify: -0.65 * Math.PI,

        // 1
        squarespace: -0.15 * Math.PI,
        wordpress: 0.7 * Math.PI,
      },
      speed: {
        first: 7,
        second: 7,
        third: 7
      }
    }

    this.w = w
    this.h = h

    this.iw = 150
    this.ih = 48

    // images
    this.point = new Image(8, 8)
    this.point.src = '/images/point.svg'

    this.drupal = new Image(this.iw, this.ih)
    this.drupal.src = '/images/drupal.svg'

    this.squarespace = new Image(this.iw, this.ih)
    this.squarespace.src = '/images/squarespace.svg'

    this.wix = new Image(this.iw, this.ih)
    this.wix.src = '/images/wix.svg'

    this.wordpress = new Image(this.iw, this.ih)
    this.wordpress.src = '/images/wordpress.svg'

    this.weebly = new Image(this.iw, this.ih)
    this.weebly.src = '/images/weebly.svg'

    this.shopify = new Image(this.iw, this.ih)
    this.shopify.src = '/images/shopify.svg'
  }

  set setCanvas({w, h}) {
    this.c.width = w
    this.c.height = h
    this.w = w
    this.h = h
  }

  set setImageSizes({w, h}) {
    this.iw = w
    this.ih = h
  }

  update() {
    // 3
    this.opt.angle.drupal += Math.PI * (this.opt.speed.third / 10000)

    // 2
    this.opt.angle.wix += Math.PI * (this.opt.speed.second / 10000)
    this.opt.angle.shopify += Math.PI * (this.opt.speed.second / 10000)
    this.opt.angle.weebly += Math.PI * (this.opt.speed.second / 10000)

    // 1
    this.opt.angle.squarespace += Math.PI * (this.opt.speed.first / 10000)
    this.opt.angle.wordpress += Math.PI * (this.opt.speed.first / 10000)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.w, this.h)
  }

  render() {
    this.ctx.beginPath()

    if (this.w >= 1280) {
      //1
      // Drupal
      this.ctx.drawImage(this.point,
        this.w / 2 - (5 + 393 * Math.cos(this.opt.angle.drupal)),
        this.h / 2 + (20 + 114 * Math.sin(this.opt.angle.drupal)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.drupal,
        this.w / 2 - (5 + this.iw / 2 + 393 * Math.cos(this.opt.angle.drupal)),
        (this.h / 2 + (20 - this.ih - 8) + 114 * Math.sin(this.opt.angle.drupal)),
        this.iw,
        this.ih)


      // 2

      // Shopify
      this.ctx.drawImage(this.point,
        (this.w / 2 - (5 + 498 * Math.cos(this.opt.angle.shopify))),
        (this.h / 2 + (20 + 151 * Math.sin(this.opt.angle.shopify))),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.shopify,
        this.w / 2 - (5 + this.iw / 2 + 498 * Math.cos(this.opt.angle.shopify)),
        (this.h / 2 + (20 - this.ih - 8) + 151 * Math.sin(this.opt.angle.shopify)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        (this.w / 2 - (5 + 498 * Math.cos(this.opt.angle.weebly))),
        (this.h / 2 + (20 + 151 * Math.sin(this.opt.angle.weebly))),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.weebly,
        this.w / 2 - (5 + this.iw / 2 + 498 * Math.cos(this.opt.angle.weebly)),
        (this.h / 2 + (20 - this.ih - 8) + 151 * Math.sin(this.opt.angle.weebly)),
        this.iw,
        this.ih)

      // Wix
      this.ctx.drawImage(this.point,
        (this.w / 2 - (5 + 498 * Math.cos(this.opt.angle.wix))),
        (this.h / 2 + (20 + 151 * Math.sin(this.opt.angle.wix))),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wix,
        this.w / 2 - (5 + this.iw / 2 + 498 * Math.cos(this.opt.angle.wix)),
        (this.h / 2 + (20 - this.ih - 8) + 151 * Math.sin(this.opt.angle.wix)),
        this.iw,
        this.ih)


      // 3

      // Squarespace
      this.ctx.drawImage(this.point,
        this.w / 2 - (5 + (600 * Math.cos(this.opt.angle.squarespace))),
        this.h / 2 + (20 + 188 * Math.sin(this.opt.angle.squarespace)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.squarespace,
        this.w / 2 - (5 + this.iw / 2 + 600 * Math.cos(this.opt.angle.squarespace)),
        (this.h / 2 + (20 - this.ih - 8) + 181 * Math.sin(this.opt.angle.squarespace)),
        this.iw,
        this.ih)

      // Wordpress
      this.ctx.drawImage(this.point,
        this.w / 2 - (5 + (600 * Math.cos(this.opt.angle.wordpress))),
        this.h / 2 + (20 + 188 * Math.sin(this.opt.angle.wordpress)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wordpress,
        this.w / 2 - (5 + this.iw / 2 + 600 * Math.cos(this.opt.angle.wordpress)),
        (this.h / 2 + (20 - this.ih - 8) + 181 * Math.sin(this.opt.angle.wordpress)),
        this.iw,
        this.ih)

    } else if (this.w >= 1180) {

      // 1
      // Drupal
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),
        (((this.h - 62) / 2) + 56) + ((-5 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 62) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.drupal,
        -this.iw / 2 +
        this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 62) / 2) + 56) + ((-5 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 62) / 376)),
        this.iw,
        this.ih)

      // 2
      // Shopify
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 80) / 1200)),
        (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 62) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.shopify,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 62) / 376)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 80) / 1200)),
        (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 62) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.weebly,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 62) / 376)),
        this.iw,
        this.ih)

      // Wix
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 80) / 1200)),
        (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 62) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wix,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 62) / 376)),
        this.iw,
        this.ih)


      // 3
      // Squarespace
      this.ctx.drawImage(this.point,
        this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 80) / 1200)),
        (((this.h - 38) / 2) + 32) + ((6 + 176 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.squarespace,
        -this.iw / 2 +
        this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((6 + 176 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wordpress
      this.ctx.drawImage(this.point,
        this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 80) / 1200)),
        (((this.h - 38) / 2) + 32) + ((6 + 176 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wordpress,
        -this.iw / 2 +
        this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((6 + 176 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

    } else if (this.w >= 1080) {

      // 1
      // Drupal
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),
        (((this.h - 38) / 2) + 32) + ((7 + 106 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.drupal,
        -this.iw / 2 +
        this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((7 + 106 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 2

      // Shopify
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 80) / 1200)),
        (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 62) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.shopify,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 62) / 376)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 80) / 1200)),
        (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 62) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.weebly,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 62) / 376)),
        this.iw,
        this.ih)

      // Wix
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 80) / 1200)),
        (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 62) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wix,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 62) / 2) + 56) + ((-5 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 62) / 376)),
        this.iw,
        this.ih)

      // 3
      // Squarespace
      this.ctx.drawImage(this.point,
        this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 80) / 1200)),
        (((this.h - 38) / 2) + 32) + ((7 + 175 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.squarespace,
        -this.iw / 2 +
        this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((7 + 175 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wordpress
      this.ctx.drawImage(this.point,
        this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 80) / 1200)),
        (((this.h - 38) / 2) + 32) + ((7 + 175 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wordpress,
        -this.iw / 2 +
        this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((7 + 175 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)
    } else if (this.w >= 1024) {

      // 1
      // Drupal
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),
        (((this.h - 38) / 2) + 32) + ((8 + 105 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.drupal,
        -this.iw / 2 +
        this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((8 + 105 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 2
      // Shopify
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 80) / 1200)),
        (((this.h - 62) / 2) + 56) + ((-7 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 62) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.shopify,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 62) / 2) + 56) + ((-7 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 62) / 376)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 80) / 1200)),
        (((this.h - 62) / 2) + 56) + ((-7 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 62) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.weebly,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 62) / 2) + 56) + ((-7 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 62) / 376)),
        this.iw,
        this.ih)

      // Wix
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 80) / 1200)),
        (((this.h - 62) / 2) + 56) + ((-7 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 62) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wix,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 62) / 2) + 56) + ((-7 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 62) / 376)),
        this.iw,
        this.ih)

      // 3
      // Squarespace
      this.ctx.drawImage(this.point,
        this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 80) / 1200)),
        (((this.h - 38) / 2) + 32) + ((8 + 174 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.squarespace,
        -this.iw / 2 +
        this.w / 2 - ((4 + +(600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((8 + 174 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wordpress
      this.ctx.drawImage(this.point,
        this.w / 2 - ((4 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 80) / 1200)),
        (((this.h - 38) / 2) + 32) + ((8 + 174 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wordpress,
        -this.iw / 2 +
        this.w / 2 - ((4 + +(600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 80) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((8 + 174 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)
    } else if (this.w >= 940) {

      // 1
      // Drupal
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-6 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.drupal,
        -this.iw / 2 +
        this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-6 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 2
      // Shopify
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.shopify,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.weebly,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wix
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wix,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)


      // 3
      // Squarespace
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.squarespace,
        -this.iw / 2 +
        this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wordpress
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wordpress,
        -this.iw / 2 +
        this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

    } else if (this.w >= 850) {

      // 1
      // Drupal
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-6 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.drupal,
        -this.iw / 2 +
        this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-6 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 2
      // Shopify
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.shopify,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.weebly,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wix
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wix,
        -this.iw / 2 +
        this.w / 2 - ((5 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 3
      // Squarespace
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.squarespace,
        -this.iw / 2 +
        this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wordpress
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wordpress,
        -this.iw / 2 +
        this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)
    } else if (this.w >= 768) {

      // 1
      // Drupal
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.drupal,
        -this.iw / 2 +
        this.w / 2 - ((5 + (393 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 114 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 2
      // Shopify
      this.ctx.drawImage(this.point,
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.shopify,
        -this.iw / 2 +
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.weebly,
        -this.iw / 2 +
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wix
      this.ctx.drawImage(this.point,
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wix,
        -this.iw / 2 +
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 3
      // Squarespace
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.squarespace,
        -this.iw / 2 +
        this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wordpress
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wordpress,
        -this.iw / 2 +
        this.w / 2 - ((5 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 188 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

    } else if (this.w >= 666) {

      // 1
      // Drupal
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (391 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-8 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.drupal,
        -this.iw / 2 +
        this.w / 2 - ((5 + (391 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-8 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 2
      // Shopify
      this.ctx.drawImage(this.point,
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.shopify,
        -this.iw / 2 +
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.weebly,
        -this.iw / 2 +
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wix,
        -this.iw / 2 +
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-8 + 152 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 3
      // Squarespace
      this.ctx.drawImage(this.point,
        this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.squarespace,
        -this.iw / 2 +
        this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wordpress
      this.ctx.drawImage(this.point,
        this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-7 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wordpress,
        -this.iw / 2 +
        this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-7 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

    } else if (this.w >= 564) {

      // 1
      // Drupal
      this.ctx.drawImage(this.point,
        this.w / 2 - ((5 + (391 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-10 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.drupal,
        -this.iw / 2 +
        this.w / 2 - ((5 + (391 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-10 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 2
      // Shopify
      this.ctx.drawImage(this.point,
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.shopify,
        -this.iw / 2 +
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.weebly,
        -this.iw / 2 +
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wix,
        -this.iw / 2 +
        this.w / 2 - ((7 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 3
      // Squarespace
      this.ctx.drawImage(this.point,
        this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.squarespace,
        -this.iw / 2 +
        this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wordpress
      this.ctx.drawImage(this.point,
        this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wordpress,
        -this.iw / 2 +
        this.w / 2 - ((6 + (598 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

    } else if (this.w >= 462) {

      // 1
      // Drupal
      this.ctx.drawImage(this.point,
        this.w / 2 - ((7 + (390 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-10 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.drupal,
        -this.iw / 2 +
        this.w / 2 - ((7 + (390 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-10 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 2
      // Shopify
      this.ctx.drawImage(this.point,
        this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.shopify,
        -this.iw / 2 +
        this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.weebly,
        -this.iw / 2 +
        this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)


      // Wix
      this.ctx.drawImage(this.point,
        this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wix,
        -this.iw / 2 +
        this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-9 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 3
      // Squarespace
      this.ctx.drawImage(this.point,
        this.w / 2 - ((10 + (598 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.squarespace,
        -this.iw / 2 +
        this.w / 2 - ((10 + (598 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wordpress
      this.ctx.drawImage(this.point,
        this.w / 2 - ((10 + (598 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wordpress,
        -this.iw / 2 +
        this.w / 2 - ((10 + (598 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-9 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

    } else {
      // 1
      // Drupal
      this.ctx.drawImage(this.point,
        this.w / 2 - ((10 + (390 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-15 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.drupal,
        -this.iw / 2 +
        this.w / 2 - ((10 + (390 * Math.cos(this.opt.angle.drupal))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-15 + 112 * Math.sin(this.opt.angle.drupal)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // 2
      // Shopify
      this.ctx.drawImage(this.point,
        this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-15 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.shopify,
        -this.iw / 2 +
        this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.shopify))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-15 + 151 * Math.sin(this.opt.angle.shopify)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Weebly
      this.ctx.drawImage(this.point,
        this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-15 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.weebly,
        -this.iw / 2 +
        this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.weebly))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-15 + 151 * Math.sin(this.opt.angle.weebly)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wix
      this.ctx.drawImage(this.point,
        this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-15 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wix,
        -this.iw / 2 +
        this.w / 2 - ((10 + (498 * Math.cos(this.opt.angle.wix))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-15 + 151 * Math.sin(this.opt.angle.wix)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)


      // 3
      // Squarespace
      this.ctx.drawImage(this.point,
        this.w / 2 - ((10 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-15 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.squarespace,
        -this.iw / 2 +
        this.w / 2 - ((10 + (600 * Math.cos(this.opt.angle.squarespace))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-15 + 186 * Math.sin(this.opt.angle.squarespace)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)

      // Wordpress
      this.ctx.drawImage(this.point,
        this.w / 2 - ((10 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        (((this.h - 38) / 2) + 32) + ((-15 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.point.width,
        this.point.height)

      this.ctx.drawImage(this.wordpress,
        -this.iw / 2 +
        this.w / 2 - ((10 + (600 * Math.cos(this.opt.angle.wordpress))) * ((this.w - 32) / 1200)),
        -(this.ih + 4) +
        (((this.h - 38) / 2) + 32) + ((-15 + 186 * Math.sin(this.opt.angle.wordpress)) * ((this.h - 38) / 376)),
        this.iw,
        this.ih)
    }

    this.ctx.closePath()

  }

  animation() {
    requestAnimationFrame(this.animation.bind(this))
    this.update()
    this.clear()
    this.render()
  }

  animate() {
    requestAnimationFrame(this.animation.bind(this))

  }
}