import PropTypes from "prop-types";
import React, { memo } from "react";
import SectionHeader from "@/components/section-header";
import { SectionV3Wrapper } from "./style";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/scroll-view";
import SectionFooter from "@/components/section-footer";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;
  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        {/* 滚动 */}
        <ScrollView>
          {infoData.list.map((item) => (
            <RoomItem itemData={item} key={item.id} itemWidth="20%" />
          ))}
        </ScrollView>
      </div>
      {/** 如果子组件中的函数触发作用不同，可以让父传给子一个函数，让子监听这个函数*/}
      <SectionFooter name="plus" />
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
