import React, { memo, useEffect } from "react";
import { Route, useLocation, useRoutes } from "react-router-dom";

import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import useScrollTop from "./hooks/useScrollTop";
import routes from "./router";

const App = memo(() => {
  useScrollTop(); // 回到页面顶部

  return (
    <div className="app">
      {/* <div className='header'>header</div> */}
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
      {/* <div className='footer'>footer</div> */}
      <AppFooter />
    </div>
  );
});

export default App;
