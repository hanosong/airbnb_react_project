const path = require("path");
const resolve = (pathname) => path.resolve(__dirname, pathname); //拼接路径
const CracoLessPlugin = require("craco-less");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// 通过node的common.js导出一个对象
module.exports = {
  // 配置less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {}, // 主题色 '@primary-color': '#1DA57A'
            javascriptEnabled: true, // 开启js是为了动态注入主题色
          },
        },
      },
    },
  ],
  // 修改webpack
  webpack: {
    mode: "development",
    devtool: "source-map",
    // 配置别名;value必须是绝对路径
    // resolve => 拼接路径 ； __dirname:当前文件所在的路径
    alias: {
      // "@": path.resolve(__dirname,"src"),
      "@": resolve("src"),
      components: resolve("src/components"),
      uitls: resolve("src/utils"),
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    },
    plugins: [
      // new BundleAnalyzerPlugin({
      //   /**
      //    * server | static | disabled
      //    * server： 分析器将启用HTTP服务器来显示打包报告
      //    * static： 会生成带有报告的单个HTML文件
      //    * disabled： 可以使用该插件来讲generateStatsFile 设置为 true 来生成webpack stats JSON文件
      //    */
      //   analyzerMode: "server",
      //   analyzerHost: "127.0.0.1", // 在服务器模式下使用的主机启用HTTP服务器
      //   analyzerPort: 8888, // 在服务器模式下使用的端口启动服务器
      //   openAnalyzer: true, // 构建完关上浏览器，自动打开报告
      //   reportFilename: path.resolve(__dirname, `analyzer/index.html`), // 输出目录
      // }),
    ],
  },
};
