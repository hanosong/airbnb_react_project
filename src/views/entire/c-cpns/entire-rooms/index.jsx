import RoomItem from "@/components/room-item";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { RoomsWrapper } from "./style";

const EntireRooms = memo(() => {
  /** 从redux获取roomList*/
  const { roomList, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
  }));
  console.log(roomList, totalCount, "roomList");
  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map((item) => (
          <RoomItem itemData={item} itemWidth="20%" key={item.id} />
        ))}
      </div>
    </RoomsWrapper>
  );
});

export default EntireRooms;
