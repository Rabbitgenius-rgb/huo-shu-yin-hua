# 火树银花 · cinematic-v2

Three.js / WebGL 粒子叙事动画。当前快照为 **2026-10-30 · v3h26**，完整时长 **32.2 秒**：一粟生光 → 金脉上生 → 金银同绽 → 环游 → 炸树成字 → 终幕。

## 本地运行

需要 Node.js 20 或更新版本，以及 Python 3。

```sh
npm ci
npm run build
npm start
```

打开 <http://127.0.0.1:5189/cinematic-v2/>。仓库已包含构建结果，也可以直接运行 `npm start` 预览。

## 操作与定位

- 点击「配乐关」启用音乐；浏览器需要一次用户点击才能播放声音。
- `H` 切换纯净模式，空格播放或暂停，`R` 重播。
- 鼠标拖动自由观察，进度条可定位。
- `?clean=1` 以纯净模式打开；`?t=25.73&clean=1` 暂停在指定秒数。
- `?motion=reduce` 检查减少动态效果的呈现。

## 目录

- `cinematic-v2/`：动画、镜头、粒子书写、节拍与配乐源码。
- `tree-src/`：图像采样、树形体积和树冠基础模块。
- `public/fire-tree-mj-04.jpg`：树形采样素材。
- `assets/fire-tree-cinematic-v2.js`：浏览器运行的构建结果。
- `cinematic-v2/audio/`：当前剪辑配乐。
- `source-audio/`：重新剪接所需的原始选段。

重新生成配乐：

```sh
python3 -I cinematic-v2/tools/splice-score.py source-audio/imperial-china-excerpt.wav cinematic-v2/audio/imperial-china-final-cut.wav
```

本仓库整理了当前版本的源码、构建结果和运行素材；本机历史实验、备份及验证截图不在此快照中。构建脚本已改为使用项目内的 npm 依赖，独立预览页移除了指向旧版本及本机参考图库的导航链接。

## 素材与依赖

配乐：**Imperial China Cinematic — Shane Ivers**（剪辑选段）。

- 原作：<https://www.silvermansound.com/free-music/imperial-china-cinematic>
- 页面原有授权标注：CC BY 4.0，<https://creativecommons.org/licenses/by/4.0/>
- Three.js：0.180.0，MIT 许可证，见 `THIRD_PARTY_NOTICES.md`。

本快照未为项目自身代码另行指定开源许可证。
