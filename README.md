# 台南咖啡散策｜真實店家版

## 開啟方式
解壓縮後，使用瀏覽器開啟 `index.html`。若本地瀏覽器限制，使用 VS Code + Live Server。

## 專案架構
- `AGENTS.md`：AI 專案規範
- `SOURCES.md`：店家資料來源與查核日期
- `index.html`：網站首頁
- `css/styles.css`：日系雜誌風格與響應式樣式
- `js/cafes.js`：真實店家資料、評分、評論數、營業時間、Google Maps 連結
- `js/app.js`：評分排序、搜尋、區域篩選、詳情視窗
- `assets/`：AI 生成的咖啡氛圍示意圖

## Google Maps 照片
每張店家卡片都提供 Google Maps 連結，點擊可查看 Google Maps 上的店家照片、評論及即時營業狀態。因 Google Maps 使用者照片有平台使用條款及著作權限制，網站不擷取或重新託管照片。卡片上的圖片為氣氛示意圖，不是店家實景。

## 部署 GitHub Pages
將整個資料夾內容上傳到 GitHub Repository 根目錄；Settings → Pages → Deploy from a branch → main → /(root) → Save。

## 資訊時效
評分、評論數與營業時間查核日期為 2026-11-13。資訊可能變動，造訪前請查看店家 Google Maps 頁面或官方社群。
