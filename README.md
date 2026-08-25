# yuxizhou2177.github.io

Personal site — built and maintained by me.

## 文件结构

```
index.html    页面结构（HTML）
style.css     所有样式：配色、排版、动画
script.js     所有内容数据 + 交互逻辑
```

## 怎么改内容

**改文字排版** → `index.html`
**改配色**     → `style.css` 最上面的 `:root` 区块
**改出差 / SIDS / 工作经历** → `script.js` 最上面的三个数组：
  `MISSIONS`、`SIDS`、`EXPERIENCE`

页面上的地图标记、飞行弧线、下方列表，全部由这三个数组自动生成——
改一处，三处同步。

## 还没做完的两件事

1. `script.js` 里的 `GC_CODE='MYCODE'` —— 换成你的 GoatCounter 代码才会统计访问
2. SIDSight 的仓库链接（`index.html` 里还是 `href="#"`）

## 语言

顶栏 EN · ES · FR · 中 四语切换。译文都在 `script.js` 顶部的 `T` / `EXP_T` /
`MIS_T` / `COMMS_T` 里，改译文只动那一块。

## 上线

GitHub → Settings → Pages → Source 选 main 分支根目录。
几分钟后 https://yuxizhou2177.github.io 就能访问。
