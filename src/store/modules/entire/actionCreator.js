import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constans'
//派发action

export const changeCurrentPageAction = (currentPage) => ({ // 返回对象
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage,
})

export const changeRoomListAction = (roomList) => ({ // 返回对象
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList,
})

export const changeTotalCountAction = (totalCount) => ({ // 返回对象
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount,
})

export const changeIsLoadingAction = (isLoading) => ({
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading,
})

export const fetchRommListAction = (page = 0) => {
    // 新的函数 会被自动调用
    /** 写法1 
    return dispatch => {
        getEntireRoomList(0).then(res => {
            console.log(res,33)
        })
    }
    */
   // 写法2
   return async (dispatch,getState) => {
    // 0. 修改currentPage
    dispatch(changeCurrentPageAction(page = 0))

    // 发送网络请求开始时切换标志位
    dispatch(changeIsLoadingAction(true));

    // 1.根据页码获取最新的数据
    // const currentPage = getState().entire.currentPage
    // const res = await getEntireRoomList(currentPage * 20); //  getEntireRoomList(0)这个0不能写死
    
    // 当写了第0步之后
    const res = await getEntireRoomList(page * 20);

    //发送网络请求完成时切换标志位
    dispatch(changeIsLoadingAction(false));
    // 2.获取到最新的数据，保存redux的store中
    const rommList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(rommList)); // 保存到store
    dispatch(changeTotalCountAction(totalCount)); // 保存到store


   }
}