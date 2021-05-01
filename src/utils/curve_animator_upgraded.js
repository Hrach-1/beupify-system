export default class CA {
  constructor(canvas) {
    this.c = canvas
    this.ctx = this.c.getContext('2d')
    this.optUpd = {
      pts: 0,
      angle: 0
    }
    this.w = 1200
    this.h = 366
    this.point = new Image()
    this.point.src = '/point.svg'
    this.system = new Image(1200, 366)
    this.system.src = '/not_expanded.svg'
  }

  update() {
    this.optUpd.angle += Math.PI * 0.002
  }

  clear() {
    this.ctx.clearRect(0, 0, this.w, this.h)
  }

  render() {
    this.ctx.beginPath()
    // this.ctx.arc(
    //   this.w / 2 + 283 * Math.cos(this.optUpd.angle),
    //   this.h / 2 + 75.5 * Math.sin(this.optUpd.angle),
    //   5,
    //   0,
    //   Math.PI * 2)
    this.ctx.arc(
      this.w / 2,
      this.h / 2,
      5,
      0,
      Math.PI * 2)
    this.ctx.drawImage(
      this.system,
      0,
      0,
      1200,
      366,
    )
    this.ctx.drawImage(this.point,
      this.w / 2 - 6 + 290 * Math.cos(this.optUpd.angle),
      this.h / 2 - 6 + 77 * Math.sin(this.optUpd.angle),
      12,
      12)

    this.ctx.fill()
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