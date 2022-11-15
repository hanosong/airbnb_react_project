import React, { memo, useState } from "react";
import { CSSTransition } from "react-transition-group";
import IconSearchBar from "@/assets/svg/icon_search_bar";
import SearchTabs from "./c-cpns/search-tabs";
import SearchTitles from "@/assets/data/search_titles";
import { CenterWrapper } from "./style";
import SearchSections from "./c-cpns/search-section";

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const titles = SearchTitles.map((item) => item.title); // 过滤
  function searchBarClickHandle() {
    // 父组件有一个变量在记录， 要让父组件处理
    if (searchBarClick) searchBarClick();
  }
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true} // 退出时自动卸载组件
      >
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>

      {/* 没有动画效果的方案 
      {
        // 搜索的工具栏
        !isSearch ? (
          <div className="search-bar" onClick={searchBarClickHandle}>
            <div className="text">搜索房源和体验</div>
            <div className="icon">
              <IconSearchBar />
            </div>
          </div>
        ) : (
          // 搜索工具栏下面的详情
          <div className="search-detail">
            <SearchTabs titles={titles} tabClick={setTabIndex} />
            <div className="infos">
              <SearchSections
                searchInfos={SearchTitles[tabIndex].searchInfos}
              />
            </div>
          </div>
        )
      }
      */}
    </CenterWrapper>
  );
});

export default HeaderCenter;
