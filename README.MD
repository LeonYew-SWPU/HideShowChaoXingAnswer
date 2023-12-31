# 学习通复习显示隐藏答案 HideShowChaoXingAnwer
## 一、作用 | Effects
隐藏/显示作业详情页的答案，用于自己期末做题测试复习效果。思考之后再看正确答案。
<div align="center">
    <img src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/HideShowChaoXingAnswer@main/pics/ShowEffect1.gif" alt="效果演示" width="300">
</div>

## 二、使用方法 | How to use
通过单击键盘左上方的 <kbd>~</kbd> 键来隐藏/显示正确答案，用于期末复习

## 三、快速安装 | Getting Started

### 0. 安装扩展
|脚本猫🐱（国内✔️） |篡改猴🐵（✅推荐）|
|--|--|
|[Edge商店（✔️）](https://microsoftedge.microsoft.com/addons/detail/scriptcat/)|[Edge商店（✔️）](https://microsoftedge.microsoft.com/addons/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/)|
|[Chrome应用店（🪜）](https://chromewebstore.google.com/detail/scriptcat/)|[Chrome应用店（🪜）](https://chromewebstore.google.com/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/)

### 1. 安装脚本
[📦v1.2.6 【点我安装⬇️】（GreasyFork）](https://update.greasyfork.org/scripts/483510.user.js)

[📦v1.2.6 【点我安装⬇️】（脚本猫）](https://scriptcat.org/scripts/code/1460/%E8%B6%85%E6%98%9F%E9%9A%90%E8%97%8F%E6%98%BE%E7%A4%BA%E6%AD%A3%E7%A1%AE%E7%AD%94%E6%A1%88.user.js)


## 四、开发计划 | Dev To-Do List
> 未实现 📃
>> 计划开发 📆
- [ ] 支持章节检测的题目
- [ ] 支持任务页面的题目答案隐藏
- [ ] 增加GUI界面-设置页面
- [ ] 设置快捷键
- [ ] 支持将答案导出到Anki、MarkJi中
>> 不准备开发 ✖️

> 已实现 ✅
- [x] “课程-作业”中的作业已支持隐藏答案复习
- [x] 通过点击按钮可显示隐藏答案
## 五、更新 | Updates
**Version: 1.2.6**
1. 修改了README使其更人性化
2. 修改了js文件的@version，去掉了版本号前的“v”，避免安装脚本时出现“vv1.x.x”

**Version: 1.2.5**
1. 修复了填空题不支持隐藏的BUG
2. 修复了GreasyFork上看不到README的GIF效果图的BUG
3. 引发了新的“特性”：填空题的div隐藏后不会保持原来的答题框大小，会造成题目位移。

**Version: 1.2.4**
1. 修改了README.MD的效果图片
2. 修改了js脚本中的版本号
3. 增加了js脚本中的项目地址

**Version: 1.2.0**
1. 增加了遮罩层用于显示答案状态
2. 增加了通过图标点按显示隐藏答案
3. 增加了“点击'答案已隐藏'之后显示答案”的功能，不再只通过按键恢复。
4. 增加了“将分数和对错状态也一起隐藏”的功能
5. 修复了用鼠标拖动可以查看反色文字的bug
6. 修改了显示原理：修改文字div的display、添加遮罩层
7. 修改了README中的效果图

**Version: 1.1.0**
1. 更新了显示原理为：修改字体颜色为transparent，以免元素隐藏之后引起页面其他元素的的上下位移。
2. 更新了README中的效果图

**Version: 1.0.0**
1. 完成了基本功能，原理是显示、隐藏答案块
2. 发布了Github、GreasyFork、ScriptCat平台
3. 创建了README，添加了git效果图