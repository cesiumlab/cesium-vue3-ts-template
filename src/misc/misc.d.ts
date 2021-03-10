import { Viewer } from "cesium";

// // 扩展新增 window 属性
// declare interface Window {
//     viewer: Viewer // 将能在全局使用 window.myGlobalVar
// }

declare global {
    interface Window {
        viewer: Viewer
    }
}