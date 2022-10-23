// 使用rtk的方式
// 创建代码片段
// createAsyncThunk 中发送对应的异步请求
import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData,getHomeLongforData } from '@/services'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// 统一获取home数据  store参数有两个参数
// getState => 如果当前网络请求依赖于当前store里面的某个state里面的数据
export const fetchHomeDataAction = createAsyncThunk("fetchdata",  (payload,{dispatch,getState}) => {
    //网络请求 返回promise对象
    // const res = await getHomeGoodPriceData()
    // return res ;// 保存结果

    getHomeGoodPriceData().then(res => {
        // 拿到数据之后直接派发,不经过额外的reducer
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotRecommendData().then(res => {
        dispatch(changeRecommendInfoAction(res))
    })
    getHomeLongforData().then(res => {
        dispatch(changeLongforInfoAction(res))
    })
})

const homeSlice = createSlice({
    name:'home',
    // 初始化数据
    initialState:{
        goodPriceInfo:{},// 高性价比数据
        highScoreInfo:{},
        discountInfo:{},
        recommendInfo:{}, //热门推荐数据
        longforInfo:{},
    },
    reducers:{
        changeGoodPriceInfoAction(state,{ payload}) {
            // 保证每次修改在redux dev tool中可以看到修改的过程
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state,{payload}){
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state,{payload}){
            state.discountInfo = payload
        },
        changeRecommendInfoAction(state, {payload}){
            state.recommendInfo = payload
        },
        changeLongforInfoAction(state, {payload}){
            state.longforInfo = payload
        }

    },
    // 额外的reducer
    extraReducers:{
        // 计算属性名
        // [fetchHomeDataAction.fulfilled](state, {payload}){
        //     console.log(payload,'payload')
        //     state.goodPriceInfo = payload;
        // }
    }
})
// 定义
export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction, 
    changeDiscountInfoAction,
    changeRecommendInfoAction,
    changeLongforInfoAction
} = homeSlice.actions;

export default homeSlice.reducer
