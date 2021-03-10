<template>
  <div style="width: 100%; height: 100%;">
    <div ref="cesiumContainer" style="width: 100%; height: 100%; overflow: hidden"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import * as Cesium from "cesium";

@Options({
  props: {
    message: String,
    imageAlpha: Number,
    position: [Number, Number, Number],
  },
})
export default class CesiumContainerComp extends Vue {
  message: string = "页面加载于 " + new Date().toLocaleString();
  _viewer: any = undefined; // 注意：Earth和Cesium的相关变量放在vue中，必须使用下划线作为前缀！
  imageAlpha: number = 1.0;
  position: [number, number, number] = [0, 0, 0];

  // 1.1 资源创建
  mounted() {
    const container = this.$refs.cesiumContainer as HTMLElement;
    var viewer = new Cesium.Viewer(container);
    window.viewer = viewer;

    this._viewer = viewer;
  }

  // 1.2 资源销毁
  beforeDestroy() {
    this._viewer.destroy();
  }
}
</script>
