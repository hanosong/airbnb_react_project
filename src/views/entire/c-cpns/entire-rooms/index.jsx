import RoomItem from "@/components/room-item";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RoomsWrapper } from "./style";

const EntireRooms = memo(() => {
  /** 从redux获取roomList*/
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map((item) => (
          // 如果用index作为key，当网卡数据切换的很慢时， 可能展示的还是上一个的数据
          <RoomItem itemData={item} itemWidth="20%" key={item._id} />
        ))}
      </div>

      {/* 蒙版 */}
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
