import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  //changeCurrentPageAction,
  fetchRommListAction,
} from "@/store/modules/entire/actionCreator";

const EntirePagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );
  const totalPage = Math.ceil(totalCount / 20); // 总页数：超出的数据必须多一页，不能向下取整
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  /** 事件处理的逻辑*/
  const dispatch = useDispatch();
  function pageChangeHandle(event, pageCount) {
    // 换页时，回到顶部
    window.scrollTo(0, 0);

    // 更新最新的页码： redux => currentPage 派发action
    /** 写法1
     *  dispatch(changeCurrentPageAction(pageCount - 1));
     * dispatch(fetchRommListAction());
     */
    // 写法2
    dispatch(fetchRommListAction(pageCount - 1));
  }

  // 如果某项数据没值的时候，不想展示，但是它又是0 => 转为布尔！！
  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第{startCount} - {endCount}个房源, 共超过{totalCount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
