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