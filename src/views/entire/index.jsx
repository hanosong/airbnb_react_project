import { getEntireRoomList } from "@/services/modules/entire";
import { fetchRommListAction } from "@/store/modules/entire/actionCreator";
import { changeHeaderConfigAction } from "@/store/modules/main";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./c-cpns/entire-filter";
import EntirePagination from "./c-cpns/entire-pagination";
import EntireRooms from "./c-cpns/entire-rooms";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  // 除了把数据保存到redux里， 也可以在主入口这里发送网络请求， 获取数据， 并且保存当前的页面等...
  // useEffect(() => {
  //   getEntireRoomList(0).then((res) => {
  //     console.log(res, "22");
  //   });
  // }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRommListAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
