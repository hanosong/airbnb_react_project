// 样式 => css in js 技术
import styled from "styled-components";

// 封装对应的组件
export const HeaderWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid #eee;

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }
  // 把上面部分的高度定死
  .content {
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
    .search-area {
      height: 100px;
    }
  }

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
`;
