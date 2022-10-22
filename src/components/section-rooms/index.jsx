import React, { memo } from "react";
import PropTypes from "prop-types";

import { RoomsWrapper } from "./style";
import RoomItem from "../room-item";

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props;
  return (
    <RoomsWrapper>
      {/* 
              list?. => 第一次map的时候没有数据 
              只展示前八条数据
            */}
      {roomList?.slice(0, 8)?.map((item) => {
        return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.prototype = {
  roomList: PropTypes.array,
};

export default SectionRooms;
