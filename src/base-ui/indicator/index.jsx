import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();
  // 当组件渲染完毕之后， 监控selectIndex有没有发生改变
  useEffect(() => {
    // 获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex]; // <div>11<div>
    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;
    // content 的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    // 获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    if (distance < 0) distance = 0; // 左边往右边移动，左边最多移动到和左边对齐
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) distance = totalDistance; // 右边往左边移动，最多移动的距离是全部可滚动的宽度 - 它的宽度
    // 改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
