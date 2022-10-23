import styled from "styled-components";

// why  over-flow: hidden? 里面还有图片， 会超出
// 层叠样式生效顺序： 先border，再padding，再内容
export const ItemWrapper = styled.div`
    flex-shrink: 0;
    width: 20%;


    .inner{
        padding: 8px;
        .item-info{
            position: relative;
            border-radius: 3px;
            overflow: hidden;
        }
    }

    .cover {
        width: 100%

    }

    .bg-cover {
        position: absolute;
        left: 0;
        right: 0px;
        bottom: 0px;
        height: 60%;
        background-image: linear-gradient(-180deg, rgba(0,0,0,0) 3%, rgba(0,0,0) 100%);
    }

    .info {
        position: absolute;
        left: 8px;
        right: 8px;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 24px 32px;
        color: #fff;
    
        .city {
          font-size: 18px;
          font-weight: 600;
        }
    
        .price {
          font-size: 14px;
          margin-top: 5px;
        }
      
    }
    


`