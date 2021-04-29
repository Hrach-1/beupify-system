<template>
  <div>
    <canvas id="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
import point from '../assets/point.svg'
import CurveAnimator from "../utils/curve_animator";


// //
//
// //


export default {
  name: "BeupifySystem",
  mounted() {
    const c1_x = 0
    const c2_x = 1200
    const canvas = this.$refs.canvas
    canvas.width = 1300
    canvas.height = 376
    console.log(canvas)
    let ctx = canvas.getContext('2d');
    {
      const curve = new CurveAnimator([0, 188], [1200, 188], [c1_x, 0], [c2_x, 0]);
      curve.animate(7, function (point, angle) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.arc(point.x + 20, point.y + 20, 5, 0, 2 * Math.PI);
        ctx.stroke()
      });
    }
    // {
    //   const curve = new CurveAnimator([1200, 188], [0, 188], [c2_x, 376], [c1_x, 376]);
    //   curve.animate(7, function (point, angle) {
    //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //     ctx.fillRect(point.x + 20, point.y + 20, 20, 20);
    //     ctx.arc(point.x + 20, point.y + 20, 5, 0, 2 * Math.PI);
    //     ctx.stroke()
    //   });
    // }
  }
}
</script>

<style scoped>
#canvas {
  max-width: 1300px;
  max-height: 376px;
  width: 100%;
  height: 100%;
}
</style>