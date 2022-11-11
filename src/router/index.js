// 配置路由的映射关系
import React from "react";
import { Navigate } from "react-router-dom";
/** 异步加载
 * 一开始Suspanse用的是loading
 * 下载好之后显示Home => app重新渲染
 * 如果是直接 import Home from "@/views/home"，则是同步加载，只会渲染一次
 * 会渲染两次 -> 解决？
 */
const Home = React.lazy(() => import("@/views/home")); //懒加载
const Entire = React.lazy(() => import("@/views/entire"));
const Detail = React.lazy(() => import("@/views/detail"));
const Demo = React.lazy(() => import("@/views/demo"));
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
];
export default routes;
