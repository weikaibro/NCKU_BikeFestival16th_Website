# NCKU_BikeFestival16th_Website 

以下為第 16 屆成大單車節官方網站的開發技術文件。

由於有大量的組件會被重複使用，因此我們主要會使用 Vue 來開發前端，並且會搭配使用 TailwindCSS 來節省重新手刻 CSS 所花費的時間。

### step1. 先下載編輯器

> 安裝 [vscode](https://code.visualstudio.com/)

### step2. 建立開發環境

> 安裝 [node.js](https://nodejs.org/en/)
> 
> Goal : 
> 在終端機輸入 `node --verison` 之後，若終端機回覆目前的版本代表安裝成功🎊


### step3. 進行版本控制

> 安裝 [git](https://git-scm.com/)
> 
> 1. [安裝教學影片](https://progressbar.tw/posts/1)
> 2. [GDSC - Git 基礎教學](https://hackmd.io/@steven1lung/ncku-gdsc-git-tutorial)
> 
> Goal : 
> 建立一個檔案並在終端機輸入 `git init` 進行追蹤，若終端機回覆 `Initialized empty Git repository in ...` 代表安裝成功🎊


### step4. 抓取目前的專案進度

> 如何抓取目前的專案進度？
> 
> 1. [與其它開發者的互動 - 使用 Pull Request（PR）](https://gitbook.tw/chapters/github/pull-request)
> 看完這篇後必須確保自己已經了解 fork、`git clone ...`、`git add .`、`git commit -m "修改內容"`、`git push`、PR 這六個名詞或指令的意義。
> 
> Goal : 
> 將[這份單車節的前端專案](https://github.com/weikaibro/NCKU_BikeFestival16th_Website) fork 回自己的 Github ( 沒有的話先創帳號 ) 內，並且在你的 vscode 內輸入 `git clone ...` 以後，若此專案出現在你的 vscode 內，代表成功抓取目前的專案進度🎊


### step5_1. 詳閱 Vue3.0 的基本規則

> Vue 3.0 有哪些基本規則？
>
> 1. [Vue3.0 官方文件](https://vuejs.org/)
> 2. [重新認識 Vue.js - Kuro Hsu](https://book.vue.tw/)
> 講的很詳細，可以當作工具書。
> 3. [前端黑洞計畫 (一) : 讓 Vite 來開啟你的 Vue | IT 邦](https://ithelp.ithome.com.tw/users/20139636/ironman/3890)
> Day1-11 主要在講 Vite 是如何配置我們專案的資料夾，Day12-30 則是在講 Vue 語法的細節。
> 4. [真的好想離開 Vue 3 新手村 feat. CompositionAPI | IT 邦](https://ithelp.ithome.com.tw/users/20152606/ironman/5782)
> Day1-6 主要在講 Vite 資料夾配置以及編譯與打包的原理 ( Day3 很接近我們專案的資料夾結構 )，Day7-30 則是在講 Vue 的語法細節 ( Day15 可略 )。
> 5. [實作 : 【必看】Vue3 + Vite 快速上手 Get Startrd | ▶️Youtube](https://www.youtube.com/playlist?list=PLbOfcOk7bN42Kzp1wQsoLuU0vPUmFBe-X)
> 這系列的教學影片可以快速幫大家「收斂」所學，裡面共 9 部影片，第 5, 6, 7, 9 部我們專案用不到可略 ( 建議切兩倍速然後邊看邊實做 )。
> 6. [實作 : Vue Playground](https://vuejs.org/examples/#hello-world)
> 裡面很多寶藏，不多說了。
> 
> In brief :
> 1 個分頁會有 n 個元件，例如按鈕元件、導覽列元件...，然後每 1 個元件都會各自寫成 1 個 vue 檔。
> 我們單車節官網會有 n 個分頁，每 1 個分頁會是 1 個 vue 檔，裡面會引入各自需要使用到的元件。
> 最後把這 n 個分頁全部一起放進 app.vue 這一個主核心檔案裡面，這個檔案就會包含我們單車節網站的所有結構了。
> 
> Goal : 
> 當你認為自己從「不瞭解 Vue」，進階到「可以看得懂我們專案的資料夾配置」，即代表 step5_1 階段性完成🎊


### step5_2. 詳閱 TailwindCSS 的基本規則

> 如何使用 TailwindCSS ( CSS 框架 ) 進行排版與美化樣式？
>
> 1. [TailwindCSS 官方文件](https://tailwindcss.com/)
> 2. [你聽過尾巴風嗎 ? CSS 框架 Tailwind 的新手入門指南 | IT 邦](https://ithelp.ithome.com.tw/users/20152251/ironman/5809)
> 可以先看 Day24~28 實作部分達到快速上手的效果。
> 3. [排版神器 Tailwind CSS～和兔兔一起快速上手漂亮的元件開發！| IT 邦](https://ithelp.ithome.com.tw/users/20138853/ironman/3928?fbclid=IwAR3Jc9SXFImqhuc_7xuc_18N0CnnUkKmV73l1Ig_Uj90Pe2rgT-ZI93oD7Y)
> 講的非常白話且新手友善，有幾篇甚至入選達標好文。
> 
> In brief :
> 以往撰寫 CSS 如下...
> ```html
> <p class="styleName">Hello</p> 
> 
> .styleName {
>   color: blue
> }
> ```
> 使用 TailwindCSS 撰寫後會變成...
> ```html
> <p class="text-blue-600">Hello</p>
> ``` 
> 前後兩者的網頁呈現效果相同，而後者直接將樣式寫在 class 內，除了可以省略命名上的麻煩，也可以大幅減少程式碼的篇幅。
> 
> Goal : 
當你可以針對我們 Vue 的初始專案，將裡面的檔案從 `<style scoped>...</style>` 裡面所寫的樣式使用 TailwindCSS 來取代之，即代表 step5_2 階段性完成🎊
> ( p.s. 不要背指令，直接用 TailwindCSS 官方網站的 Quick Search 功能查詢 )

### step6 挑選你想要進行開發的網頁元件

參考[這個設計部給出的樣式](https://www.figma.com/file/oFImhUItKED7zAvxeQGnMc/2023%E5%96%AE%E8%BB%8A%E7%AF%80?node-id=0%3A1)進行開發，並且將以下的元件獨立開發後再放進 step4 給予大家前端專案裡的 `"./src/components"` 資料夾即可。( 1 元件 = 1 vue )

> 一、所有頁面共用 :
> 1. 頁首導覽列元件
> ( html: `navigation bar` )
> 2. 頁尾元件
> ( html: `</footer>` )
> 3. 不規則形按鈕 + 圓角按鈕元件
> ( html: `</button>` )
>
> 二、報名頁面 :
> 1. 報名表單元件
> ( html: `</form>` )
>
> 三、專案介紹頁面 :
> 1. 成大單車節幻燈片 + 單車節緣起幻燈片 + 籌備團隊幻燈片元件
> ( html: `slideshow / carousel slider` )
> 2. 四大主題活動元件
> ( html: `</div>` ) 
> 
> 四、活動資訊頁面 :
> 1. 展場地圖、交通資訊、時間表元件
> ( html: `</li>` )
> 
> 五、活動介紹頁面 :
> 1. podcast 播放器元件
> ( html: `</audio>` ) 
> 
> Goal :
依照上述的「標題」選擇你想要開發的，將你的名字 or 綽號寫在該標題的後面 ( "Ctrl + Alt + B" 開啟編輯模式 )，並且注意開發的截止時間為 **1/27 (五) 23 : 59**。
> - 一 : 1 人 - YeyeLeaf
> - 二、三 : 1 人 - Wayne
> - 四、五 : 1 人 - Kirin


<!-- > 
> 六、主題專欄頁面 :
> 1. ...
> 
> 七、科系博覽頁面 :
> 1. ...
> 
> 八、合作夥伴頁面 :
> 1. ...
> 
> 九、紀念品預購頁面 :
> 1. ...
>  -->


---

## Vue 前端開發注意事項

1. 先 delete 專案裡用不到的模板檔案，例如 `"/HelloWorld.vue"`。

2. 將 `"./src/assets/xxx.css"` 裡面的 2 個 CSS 檔案內容都先 `Ctrl + /` 註解掉，因為他會卡你 CSS 的樣式權重。
( 也就是說網頁會優先顯示他的 CSS，而不顯示你的 )

2. 想要在瀏覽器上預覽你的開發結果，首次預覽先在 vscode 的終端機內輸入 `npm install`，之後預覽就只要輸入 `npm run dev` 即可。
( 並不是開啟 live server )

3. 確保你使用的是 Composition API 進行開發，而不是 Option API。
( 為了保持程式碼風格一致，以便後續維護 )

4. 查資料的過程中，先確保自己閱讀的是 Vue3.0 以上的內容而不是 Vue2.0。
( 版本有大改所以兩者語法有一點不同 )

5. 可以在 vscode 裡面安裝以下插件方便你日後的開發
    - Vue Language Features (Volar)
    - Tailwind CSS IntelliSense
    - Git Graph
    - ...
6. ...

---

## 問題與討論

有遇到卡住的地方可以在這裡的問題與討論區留言，或者是 google 找答案，也可以直接截圖私訊我 discord，或是直接把問題貼在 [chatGPT](https://chat.openai.com/chat) 詢問最快。

Q1. 輸入 npm run dev 時出現以下報錯 :
`npm ERR! ENOENT: no such file or directory, open "...\package.json"`

A1. 在終端機內輸入以下 4 個指令即可 :
`npm cache clean --force` → `npm rm -rf node_modules` → `rm package-lock.json` → `npm install`

Q2.
...

---

## 【補充】前端好用工具

### 1. [CSS peeper](https://csspeeper.com/)

> 讓你可以在日常生活中隨意點擊某個網頁元件，就可以獲取該元件的 CSS 組成結構。

### 2. [SVG Repo](https://www.svgrepo.com/)

> 讓你可以在網頁中添加喜歡的 icon SVG 向量圖檔，無論放大或縮小都不會導致失真。

### 3. [w3school](https://www.w3schools.com/html/default.asp)

> 你可以將這個網站當成工具書，裡面收錄了大部分的 html, css, js 語法並且附帶解釋，如果語法不熟可以在這裡複習。

### 4. ...
