import useScrollPosition from "@/hooks/useScrollPosition";
import classNames from "classnames";
import React, { memo, useState, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { HeaderWrapper, SearchAreaWrapper } from "./style";

const AppHeader = memo(() => {
  /** 定义组件内部的状态--是否展示搜索框*/
  const [isSearch, setIsSearch] = useState(true);

  /** 从redux中获取数据，如果数据改变了，页面会重新渲染*/
  // 注意， 没有重新渲染，数据有改变，但是打印不会变（没监听到）
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed, topAlpha } = headerConfig;
  /** 监听滚动*/
  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);
  // 在正常情况下（搜索框没弹出来前），不断记录值
  if (!isSearch) prevY.current = scrollY;
  // 在弹出搜索功能的情况下，滚动距离大于之前记录的距离的30 --- 不能直接if scrollY > 30 -> 否则会重复触发死循环渲染
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false);

  /** 透明度的逻辑*/
  const isAlpha = topAlpha && scrollY === 0;
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch}></SearchAreaWrapper>
        </div>
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
