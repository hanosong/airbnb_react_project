import classNames from "classnames";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { HeaderWrapper } from "./style";

const AppHeader = memo(() => {
  /** 从redux中获取数据，如果数据改变了，页面会重新渲染*/
  // 注意， 没有重新渲染，数据有改变，但是打印不会变（没监听到）
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed } = headerConfig;
  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
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
