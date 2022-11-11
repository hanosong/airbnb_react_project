// 第三方导入
import React, { Suspense } from "react"; //Suspense 异步加载失败的应急方案
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components"; // 主题色
//自己的导入
import App from "@/App";
import "antd/dist/antd.less";
import "./assets/css/index.less";
// import 'antd/dist/antd.less'  => 也可以这样陪antd
// @ => src : webpack
// 问题：react脚手架隐藏了webpack
// 方法1：npm run eject
// 方法2：craco => create-react-app config => 会在cracoconfig.js里面的配置和原来webpack的配置进行合并
// npm install @craco/craco@alpha -D
import "normalize.css"; // 在这里导入直接会进入到webpack的依赖图内
import store from "./store";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // Suspense => 对页面进行异步加载，因为打包的时候用到了import函数，webpack会单独打包一个js文件
  //=> home/entire/detail都是单独的js文件 => store给页面提供数据的时候，可能这个页面还没加载下来
  // => AppHeader不会监听异步加载的js文件/事件dispatch(headerConfig) （.subscribe) => 解决：用Provider包裹Suspense => Suspense属于Provider的一部分，不管是加载loading还是真实的页面，都属于provider页面的一部分，所以会监听到
  <Provider store={store}>
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
  // </React.StrictMode> 严格模式的生命周期会强制执行两次
);
