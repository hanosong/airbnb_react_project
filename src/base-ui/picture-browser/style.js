import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed; // 铺满屏幕
  z-index: 999; // 最顶层
  // 上下左右都为0 => 占据视口100%
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  background-color: #333; // 把旁边的内容遮住

  //按钮样式
  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1; // 高度自适应

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: absolute;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh; //与高度有关，不要占满视口

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none; //
      }
      /** 动画样式*/
      .pic-enter {
        // 进入动画
        transform: translateX(
          ${(props) => (props.isNext ? " 100% " : "-100%")}
        ); // transform的百分比是相对于自身的, 应该动态绑定, 因为不知道点的是
        opacity: 0; // 透明
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 150 ease;
      }

      .pic-exit {
        // 离开的时候只有过渡动画,没有位移动画
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
        transition: all 150 ease;
      }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    height: 100px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease; // 高度的过渡动画
        height: ${(props) => (props.showList ? "67px" : "0")};

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
