export default class CA {
  constructor(canvas) {
    this.c = canvas
    this.ctx = this.c.getContext('2d')
    this.opt = {
      pts: 0,
      angle: {
        // 3
        drupal: 0,

        // 2
        wix: 5,
        squarespace: 15,

        // 1
        shopify: 0.6,
        weebly: 9,
        wordpress:11
      },
      speed: {
        first: 6,
        second: 6,
        third: 6
      }
    }
    // console.log('canvas width : ', this.c.height );
    console.log('canvas : ', this.c.style );

    // this.w = 1280
    // this.h = 476
    //
    // this.c.width = this.w
    // this.c.height = this.h

    this.rw = 1300
    this.rh = 400

    this.iw = 150
    this.ih = 48

    // images
    this.point = new Image(8, 8)
    this.point.src = '/images/point.svg'

    this.system = ''

    this.drupal = new Image( this.iw, this.ih)
    this.drupal.src = '/images/drupal.svg'

    this.squarespace = new Image( this.iw, this.ih)
    this.squarespace.src = '/images/squarespace.svg'

    this.wix = new Image( this.iw, this.ih)
    this.wix.src = '/images/wix.svg'

    this.wordpress = new Image( this.iw, this.ih)
    this.wordpress.src = '/images/wordpress.svg'

    this.weebly = new Image( this.iw, this.ih)
    this.weebly.src = '/images/weebly.svg'

    this.shopify = new Image( this.iw, this.ih)
    this.shopify.src = '/images/shopify.svg'
  }

  set setSystemImg(img) {
    console.log(img)
    this.system = img
  }

  update() {
    // 3
    this.opt.angle.drupal += Math.PI * (this.opt.speed.third / 10000)

    // 2
    this.opt.angle.squarespace += Math.PI * (this.opt.speed.second / 10000)
    this.opt.angle.wix += Math.PI * (this.opt.speed.second / 10000)

    // 1
    this.opt.angle.shopify += Math.PI * (this.opt.speed.first / 10000)
    this.opt.angle.weebly += Math.PI * (this.opt.speed.first / 10000)
    this.opt.angle.wordpress += Math.PI * (this.opt.speed.first / 10000)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.w, this.h)
  }

  render() {
    this.ctx.beginPath()
    this.ctx.fillStyle = "#1E1939"
    this.ctx.fillRect(0, 0, this.w, this.h);

    // System
    this.ctx.drawImage(
      this.system,
      (this.w - this.system.width)/2,
      (this.h - this.system.height)/2,
      this.w - 80,
      this.h - 100,
    )

    // 4
    // this.ctx.drawImage(this.point,
    //   this.w / 2 - 7 + 292 * Math.cos(this.opt.angle),
    //   this.h / 2 - 5 + 76 * Math.sin(this.opt.angle),
    //   this.pointSize,
    //   this.pointSize)

    // // 3
    //
    // // Drupal
    // this.ctx.drawImage(this.point,
    //   this.w / 2 - 4 + 392 * Math.cos(this.opt.angle.drupal),
    //   this.h / 2 - 4 + 110 * Math.sin(this.opt.angle.drupal),
    //   this.point.width,
    //   this.point.height)
    //
    // this.ctx.drawImage(this.drupal,
    //   this.w / 2 - 75 + 392 * Math.cos(this.opt.angle.drupal),
    //   this.h / 2 - 48 - 4 + 110 * Math.sin(this.opt.angle.drupal),
    //   this.iw,
    //   this.ih)
    //
    // // 2
    //
    // // Squarespace
    // this.ctx.drawImage(this.point,
    //   this.w / 2 - 4 + 496 * Math.cos(this.opt.angle.squarespace),
    //   this.h / 2 - 4 + 147 * Math.sin(this.opt.angle.squarespace),
    //   this.point.width,
    //   this.point.height)
    //
    // this.ctx.drawImage(this.squarespace,
    //   this.w / 2 - 75 + 496 * Math.cos(this.opt.angle.squarespace),
    //   this.h / 2 - 48 - 4 + 147 * Math.sin(this.opt.angle.squarespace),
    //   this.iw,
    //   this.ih)
    //
    // // Wix
    // this.ctx.drawImage(this.point,
    //   this.w / 2 - 4 + 496 * Math.cos(this.opt.angle.wix),
    //   this.h / 2 - 4 + 147 * Math.sin(this.opt.angle.wix),
    //   this.point.width,
    //   this.point.height)
    //
    // this.ctx.drawImage(this.wix,
    //   this.w / 2 - 75 + 496 * Math.cos(this.opt.angle.wix),
    //   this.h / 2 - 48 - 4 + 147 * Math.sin(this.opt.angle.wix),
    //   this.iw,
    //   this.ih)
    //
    //
    // // 1
    //
    // // Shopify
    // this.ctx.drawImage(this.point,
    //   this.w / 2 - 4 + 598 * Math.cos(this.opt.angle.shopify),
    //   this.h / 2 - 4 + 184 * Math.sin(this.opt.angle.shopify),
    //   this.point.width,
    //   this.point.height)
    //
    // this.ctx.drawImage(this.shopify,
    //   this.w / 2 - 75 + 598 * Math.cos(this.opt.angle.shopify),
    //   this.h / 2 - 48 - 4 + 184 * Math.sin(this.opt.angle.shopify),
    //   this.iw,
    //   this.ih)
    //
    // // Wordpress
    // this.ctx.drawImage(this.point,
    //   this.w / 2 - 4 + 598 * Math.cos(this.opt.angle.wordpress),
    //   this.h / 2 - 4 + 184 * Math.sin(this.opt.angle.wordpress),
    //   this.point.width,
    //   this.point.height)
    //
    // this.ctx.drawImage(this.wordpress,
    //   this.w / 2 - 75 + 598 * Math.cos(this.opt.angle.wordpress),
    //   this.h / 2 - 48 - 4 + 184 * Math.sin(this.opt.angle.wordpress),
    //   this.iw,
    //   this.ih)
    //
    // // Weebly
    // this.ctx.drawImage(this.point,
    //   this.w / 2 - 4 + 598 * Math.cos(this.opt.angle.weebly),
    //   this.h / 2 - 4 + 184 * Math.sin(this.opt.angle.weebly),
    //   this.point.width,
    //   this.point.height)
    //
    // this.ctx.drawImage(this.weebly,
    //   this.w / 2 - 75 + 598 * Math.cos(this.opt.angle.weebly),
    //   this.h / 2 - 48 - 4 + 184 * Math.sin(this.opt.angle.weebly),
    //   this.iw,
    //   this.ih)

    this.ctx.closePath()

  }

  animation(ts) {
    requestAnimationFrame(this.animation.bind(this))
    this.update()
    this.clear()
    this.render()
  }

  animate() {
    requestAnimationFrame(this.animation.bind(this))

  }
}