import styled from "styled-components";

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
  width: ${(props) => props.itemWidth};
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

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; // 保持原来宽高比的情况下，填满盒子
    }
  }

  .slider {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );

        &.right {
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
      }
    }

    // 指示器小点的wrapper宽度
    .indicator {
      position: absolute;
      z-index: 9;
      bottom: 10px;
      left: 0;
      right: 0;
      width: 30%;
      margin: 0 auto; //居中

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.29%; //总共显示7个dot

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            // 放大dot
            width: 8px;
            height: 8px;
            /* background-color: red; */
          }
        }
      }
    }
  }

  /* .swiper {
    .control {
      color: #fff; // 小箭头的颜色设置
    }
  } */

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifyColor};
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
    color: ${(props) => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-icon {
      margin-right: -2px;
    }
  }
`;
