import hyRequest from "..";

// url请求的封装
// 高性价比
export function getHomeGoodPriceData(){
    return hyRequest.get({
        url: "/home/goodprice"
    })
}


// 高评分
export function getHomeHighScoreData(){
    return hyRequest.get({
        url: "/home/highscore"
    })
}

// 折扣
export function getHomeDiscountData(){
    return hyRequest.get({
        url:"/home/discount"
    })
}

// 热门推荐
export function getHomeHotRecommendData(){
    return hyRequest.get({
        url: "/home/hotrecommenddest"
    })
}

// 向往的地方
export function getHomeLongforData(){
    return hyRequest.get({
        url:"/home/longfor"
    })
}