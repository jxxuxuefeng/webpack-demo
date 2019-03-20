// node路径模块
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
// 清除dist文件夹
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
  // 模式 开发环境 development  正式环境 production
  mode: "production",
  // 插件
  plugins: [
    // 清除dist文件夹
    new CleanWebpackPlugin()
  ]
});
