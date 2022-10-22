const path = require('path')
const resolve = pathname => path.resolve(__dirname,pathname) //拼接路径
const CracoLessPlugin = require('craco-less');
// 通过node的common.js导出一个对象
module.exports = {
    // 配置less
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: {  }, // 主题色 '@primary-color': '#1DA57A'
                javascriptEnabled: true, // 开启js是为了动态注入主题色
              },
            },
          },
        },
      ],
    // 修改webpack
    webpack: {
        // 配置别名;value必须是绝对路径
        // resolve => 拼接路径 ； __dirname:当前文件所在的路径
        alias:{
            // "@": path.resolve(__dirname,"src"),
            "@": resolve("src"),
            "components":resolve("src/components"),
            "uitls":resolve("src/utils"),
            // '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    }

}