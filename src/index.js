import React, { Suspense } from "react"; //Suspense 异步加载失败的应急方案
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components"; // 主题色
import App from "@/App";
import "antd/dist/antd.less";
import "./assets/css/index.less";
import "normalize.css"; // 在这里导入直接会进入到webpack的依赖图内
import store from "./store";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
);
