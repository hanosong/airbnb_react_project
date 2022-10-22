import styled from "styled-components";
/**
 * 引入背景
 * import coverImg from '@/assets/img/cover_01.jpeg'
    描述背景路径
    background: url(${coverImg}) center/cover;
    注意：center/cover => center：position ; cover ：size

    为什么vue中可以直接在template中 ~assets
    因为：vue-loader将图片路径解析了
 */


// 使用require进行包裹 => jsx中引入； 返回一个对象，要拿到完整路径需要.default(早期webpack版本需要)
export const BannerWrapper = styled.div`
    height: 529px;
    background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
`
