import hyRequest from "..";

//offset => 从第几条数据开始请求， size => 一共请求多少条
export function getEntireRoomList(offset = 0, size = 20){
    return hyRequest.get({
        url: 'entire/list',
        params:{
            offset,
            size,
        }
    })
}