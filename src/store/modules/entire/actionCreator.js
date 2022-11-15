import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constans";
//派发action

export const changeCurrentPageAction = (currentPage) => ({
  // 返回对象
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  // 返回对象
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  // 返回对象
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
});

export const fetchRommListAction = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(changeCurrentPageAction((page = 0)));
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomList(page * 20);
    dispatch(changeIsLoadingAction(false));
    const rommList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(rommList));
    dispatch(changeTotalCountAction(totalCount));
  };
};
