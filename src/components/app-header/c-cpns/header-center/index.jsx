import React, { memo } from "react";
import IconSearchBar from "@/assets/svg/icon_search_bar";
import SearchTabs from "./c-cpns/search-tabs";
import SearchTitles from "@/assets/data/search_titles";

import { CenterWrapper } from "./style";

const HeaderCenter = memo(() => {
  const titles = SearchTitles.map((item) => item.titles); // 过滤

  return (
    <CenterWrapper>
      {/* 搜索的工具栏 */}
      {/* <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div> */}

      {/* 搜索工具栏下面的详情 */}
      <div className="search-detail">
        <SearchTabs titles={titles} />
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
