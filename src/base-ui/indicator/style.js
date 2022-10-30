import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  .i-content {
    display: flex;
    position: relative; // 要拿到offsetLeft，必须要有定位元素
    overflow: hidden;
    transition: transform 200ms ease;
  }
  > * {
    flex-shrink: 0;
  }
`;
