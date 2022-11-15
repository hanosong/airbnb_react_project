// 样式 => css in js 技术
import styled from "styled-components";

// 封装对应的组件
export const HeaderWrapper = styled.div`
  /* display: flex;
  align-items: center;
  border-bottom: 1px solid #eee; */

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }
  // 把上面部分的高度定死
  .content {
    position: relative;
    z-index: 19;
    transition: all 250ms ease; // 切换时的动画
    background-color: ${(props) =>
      props.theme.isAlpha
        ? "rgba(255,255,255,0)"
        : "rgba(255,255,255,1)"}; // 1:不透明
    border-bottom: 1px solid #eee;
    // 切换时的分割线
    border-bottom-color: ${(props) =>
      props.theme.isAlpha ? "rgba(233,233,233,0)" : "rgba(233,233,233,1)"};

    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
    /* .search-area {
      height: 100px;
    } */
    // 遮罩
    .cover {
      position: fixed;
      z-index: 9;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${(props) => (props.isSearch ? "100px" : "0")};
`;
