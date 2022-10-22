import React, { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-banner/home-section-v1";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";

const Home = memo(() => {
  /**从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual
  ); // shallowEqual只有发生改变进行浅拷贝的时候才要获取数据，才需要重新渲染
  /**数据转换 */
  const [name, setName] = useState("佛山");
  const tabNames = discountInfo.dest_address?.map((item) => item.name);
  // 使用callback，防止每次都传入一个新的函数
  const tabClickHandle = useCallback(function (index, name) {
    // 根据name，对数据做过滤、
    setName(name);
  }, []);

  /**派发异步事件： 发送网络请求 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction()); // fetchHomeDataAction也可以传参，参数会在createAsyncThunk回调函数中被接收
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣数据 */}
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
        </div>
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />

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
