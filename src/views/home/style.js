import styled from "styled-components";

// > . => 直接的子元素，防止子孙标签类名重复时的样式污染
// flex-wrap: wrap; 换行
// margin: 0 -8px; => 处理左侧间隙
export const HomeWrapper = styled.div`
  > .content {
    width: 1032px;
    margin: 0 auto;
  }

  > div {
    /* margin-top: 30px; // 导致首页无法贴紧顶部 */
  }
`;
