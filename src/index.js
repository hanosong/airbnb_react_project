// 第三方导入
import React,{Suspense} from 'react'; //Suspense 异步加载失败的应急方案
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'; // 主题色
//自己的导入
import App from '@/App';
import './assets/css/index.less';
// import 'antd/dist/antd.less'  => 也可以这样陪antd
// @ => src : webpack
// 问题：react脚手架隐藏了webpack
// 方法1：npm run eject
// 方法2：craco => create-react-app config => 会在cracoconfig.js里面的配置和原来webpack的配置进行合并
// npm install @craco/craco@alpha -D
import 'normalize.css' // 在这里导入直接会进入到webpack的依赖图内
import store from './store';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback='loading'> 
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
  // </React.StrictMode> 严格模式的生命周期会强制执行两次
);

