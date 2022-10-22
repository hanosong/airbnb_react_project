import styled from "styled-components"

// 如何让每个item之间有间隙？borderbox + padding; 但是第一个item左侧的间隙怎么办？ 大盒子设-margin

/*
display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
 -webkit-line-clamp用来限制在一个块元素显示的文本的行数。
-webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 
*/

/**
 * 为什么不直接设置img width= 100%？ => 每张图片的比例不一样，导致图片显示的高度不一致
 * padding-top:66.66 => 让它的高度是本身宽度的66.66
 * 如果img不做绝对定位， 那图片会显示在cover容器的下方，且高度依然不一
 */
export const ItemWrapper = styled.div`
    flex-shrink: 0;
    box-sizing: border-box;
    width: ${props => props.itemWidth};
    padding: 8px;

    .inner {
        width: 100%;
    }

    .cover {
        position: relative;
        box-sizing: border-box;
        padding: 66.66% 8px 0;
        border-radius: 3px;
        overflow: hidden;
    }

    img{
        position: absolute;
        left:0;
        top: 0;
        width: 100%;
        height:100%;
    }

    .desc {
        margin: 10px 0 5px;
        font-size: 12px;
        font-weight: 700;
        color: ${props => props.verifyColor}
    }
    .name {
        font-size: 16px;
        font-weight: 700;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .price {
        margin: 8px 0;
    }
    .bottom {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        color: ${props => props.theme.text.primaryColor};

        .count {
            margin: 0 2px 0 4px;
        }

        .MuiRating-icon {
            margin-right: -2px;
        }
    }
`