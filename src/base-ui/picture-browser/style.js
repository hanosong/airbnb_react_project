import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed; // 铺满屏幕
  z-index: 999; // 最顶层
  // 上下左右都为0 => 占据视口100%
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

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
`;
