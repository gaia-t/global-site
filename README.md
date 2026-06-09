# Cofit - 健康營養網站

現代化的健康營養單頁應用，專注於流暢的動畫體驗和視覺吸引力。

## 技術棧

### 核心框架
- **React 18.3.1** - UI 框架
- **Vite 6.3.5** - 構建工具
- **Tailwind CSS v4** - 樣式框架
- **TypeScript** - 類型安全

### 動畫與交互
- **Motion (Framer Motion) 12.23.24** - 動畫引擎
  - 滾動驅動動畫
  - 彈簧物理動畫
  - 手勢交互

### UI 組件
- **Radix UI** - 無障礙組件基礎
- **Material UI** - Material Design 組件
- **Lucide React** - 圖標庫

## 主要功能特性

### 動畫效果
- **滾動視差** - 背景和元素的深度滾動效果
- **磁吸按鈕** - 鼠標跟隨的互動按鈕
- **數字動畫** - 平滑的計數器動畫
- **3D 卡片** - 懸停時的 3D 旋轉效果
- **Liquid Glass** - 玻璃態毛玻璃效果
- **浮動粒子** - 背景動態粒子系統

### 滾動效果
- **Header 變色** - 頂部導航欄滾動時從透明變為實色
- **滾動進度條** - 頁面頂部的閱讀進度指示器
- **視差圖片** - 圖片隨滾動產生深度感
- **返回頂部** - 平滑滾動返回按鈕

### 響應式設計
- 完全響應式佈局適配桌面端和移動端
- 移動端導航優化（換行、縮小字體）
- 自適應圖片和間距

## 項目結構

```
src/
├── app/
│   ├── components/
│   │   ├── cofit/
│   │   │   ├── AnimatedCounter.tsx      # 數字滾動計數器
│   │   │   ├── AnimatedText.tsx         # 文字動畫
│   │   │   ├── BackToTop.tsx            # 返回頂部按鈕
│   │   │   ├── ClosingSection.tsx       # 結尾區塊
│   │   │   ├── CursorFollower.tsx       # 自定義光標
│   │   │   ├── ExpertsSection.tsx       # 專家團隊
│   │   │   ├── FloatingParticles.tsx    # 浮動粒子
│   │   │   ├── FootprintSection.tsx     # 社區覆蓋統計
│   │   │   ├── Header.tsx               # 導航欄
│   │   │   ├── HeroSection.tsx          # 首屏
│   │   │   ├── HowItWorksSection.tsx    # 工作流程
│   │   │   ├── MagneticButton.tsx       # 磁吸按鈕
│   │   │   ├── ResultsSection.tsx       # 成果展示
│   │   │   ├── ScrollProgress.tsx       # 滾動進度
│   │   │   └── SolutionsSection.tsx     # 解決方案
│   │   └── CofitLanding.tsx             # 主頁面組件
│   └── App.tsx                          # 應用入口
├── styles/
│   ├── theme.css                        # 設計系統變量
│   └── fonts.css                        # 字體導入
└── imports/                             # Figma 導入資源
    ├── Fonts/                           # SVG 字體
    └── Vector/                          # 矢量圖標
```

## 組件說明

### 佈局組件

#### Header
- 固定頂部導航
- 滾動時背景和文字顏色漸變
- 動態顯示 "Get started" 按鈕
- 響應式菜單佈局

#### ScrollProgress
- 頁面頂部的漸變進度條
- 彈簧物理動畫

#### BackToTop
- 滾動超過 500px 後顯示
- 彈簧動畫過渡

### 內容區塊

#### HeroSection
- 視差背景滾動
- 浮動粒子效果
- 磁吸互動按鈕
- 漸出動畫

#### ResultsSection
- 數字滾動計數器
- 3D 卡片懸浮效果
- 視差圖片背景

#### FootprintSection
- Liquid Glass 卡片效果
- 浮動光球背景動畫
- YouTube 和 App 下載統計

#### ExpertsSection
- 團隊成員圖片網格
- Hover 浮起動畫

### 可複用組件

#### MagneticButton
```tsx
<MagneticButton href="#link" className="..." style={{}}>
  按鈕文字
</MagneticButton>
```
- 鼠標跟隨效果
- 可自定義樣式和顏色

#### AnimatedCounter
```tsx
<AnimatedCounter value={1000} suffix="+" className="..." />
```
- 彈簧物理數字動畫
- 可自定義前綴和後綴

#### FloatingParticles
- 背景浮動氣泡
- 無限循環動畫

## 設計系統

### 品牌色彩
```css
--color-primary: #004F51        /* 深綠色 */
--color-secondary: #169E6B      /* 亮綠色 */
--color-accent-orange: #FFB46E  /* 橙色強調 */
--color-accent-blue: #00C2E0    /* 藍色強調 */
--color-text: #1d2129           /* 主文字 */
--color-text-secondary: #86909c /* 次要文字 */
```

### 字體
- **主字體**: Noto Sans TC
- **回退字體**: -apple-system, sans-serif

### 動畫參數
- **Duration**: 0.2s - 0.8s
- **Easing**: `[0.22, 1, 0.36, 1]` (自定義緩動曲線)
- **Spring**: damping 30, stiffness 50

### 響應式斷點
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

## 安裝和運行

### 安裝依賴
```bash
pnpm install
```

### 開發模式
開發服務器已在後台運行，直接在預覽窗口查看即可。

### 構建
```bash
pnpm build
```

## 核心動畫實現

### 滾動驅動動畫
```tsx
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start start", "end start"]
});

const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
```

### 彈簧物理動畫
```tsx
const spring = useSpring(value, {
  damping: 30,
  stiffness: 50,
});
```

### 磁吸效果
```tsx
const handleMouseMove = (e) => {
  const rect = buttonRef.current.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const x = (e.clientX - centerX) * 0.3;
  const y = (e.clientY - centerY) * 0.3;
  setPosition({ x, y });
};
```

## 性能優化

- 使用 `viewport={{ once: true }}` 避免重複動畫
- 滾動事件使用 Motion 的 useScroll hook
- 圖片使用 CDN 和本地資源
- CSS 變量減少重複樣式

## 瀏覽器支援

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 致謝

- 設計工具: Figma
- 動畫靈感: 國際化高端網站
- 圖片來源: Unsplash

---

由 Claude Code 與 Figma Make 協作開發
