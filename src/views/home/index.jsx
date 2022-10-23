import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyObject } from "@/utils";
import HomeLongfor from "./c-cpns/home-longfor";

const Home = memo(() => {
  /**从redux中获取数据 */
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
    }),
    shallowEqual
  ); // shallowEqual只有发生改变进行浅拷贝的时候才要获取数据，才需要重新渲染

  /**派发异步事件： 发送网络请求 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction()); // fetchHomeDataAction也可以传参，参数会在createAsyncThunk回调函数中被接收
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣数据
        <div className="discount">
          <SectionHeader
            title={discountInfo.title}
            subtitle={discountInfo.subtitle}
          />
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
          <SectionRooms
            roomList={discountInfo.dest_list?.[name]}
            itemWidth="33.333%"
          />
        </div> */}
        {/* 防止组件多次渲染 */}
        {isEmptyObject(discountInfo) && (
          <HomeSectionV2 infoData={discountInfo} />
        )}
        {isEmptyObject(recommendInfo) && (
          <HomeSectionV2 infoData={recommendInfo} />
        )}
        {isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {isEmptyObject(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo} />
        )}
        {isEmptyObject(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo} />
        )}
        {/* <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
        <div className="high-score">
          <SectionHeader
            title={highScoreInfo.title}
            subtitle={highScoreInfo.subtitle}
          />
          <SectionRooms roomList={highScoreInfo.list} />
        </div> */}
      </div>
    </HomeWrapper>
  );
});

export default Home;
