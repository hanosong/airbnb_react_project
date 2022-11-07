import React, { memo } from "react";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { HeaderWrapper } from "./style";

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>
      </div>
      <div className="search-area"></div>
      <div className="cover"></div>
    </HeaderWrapper>
  );
});

export default AppHeader;
