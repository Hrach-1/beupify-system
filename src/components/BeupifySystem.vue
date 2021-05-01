<template>
  <div style="background-color:#1E1939; ">
    <div class="thumbnail">
<!--      <img src="../../public/expanded.svg" alt="beupify_system">-->
    </div>
    <canvas class="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
import CA from "../utils/curve_animator_upgraded";


export default {
  name: "BeupifySystem",
  mounted() {

    const canvas = this.$refs.canvas
    canvas.width = 1300
    canvas.height = 400

    const ca = new CA(canvas)
    ca.animate()
  }
}
</script>

<style scoped>
.canvas {
  width: 1300px;
  height: 400px;
  /*border:1px solid black;*/
}

.thumbnail img {
  position: absolute;
  top:10px;
  left: 10px;
  max-width: 1200px;
  max-height: 366px;
  width: 100%;
  height: 100%;
}
</style>