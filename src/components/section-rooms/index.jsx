import React, { memo } from "react";
import PropTypes from "prop-types";

import { RoomsWrapper } from "./style";
import RoomItem from "../room-item";

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props;
  return (
    <RoomsWrapper>
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
