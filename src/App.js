import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import useScrollTop from "./hooks/useScrollTop";
import routes from "./router";

const App = memo(() => {
  useScrollTop(); // 回到页面顶部

  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  );
});

export default App;
