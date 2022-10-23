import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  /** 定义内部的状态 */
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false); // 是否显示按钮
  const [posIndex, setPosIndex] = useState(0); // 记录里面是第几个item（索引）
  const totalDistanceRef = useRef(); //右边超出的距离; ref可以在组件多次刷新的时候保持一样的值
  /**  组件渲染完毕，判断是否显示按钮*/
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //一共可以滚动的宽度 => 超出部分的宽度 + 本身
    const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth; // 一共可滚动的距离 => 超出部分的宽度
    setShowRight(totalDistance > 0);
    totalDistanceRef.current = totalDistance; // 记录数据，不需要刷新
  }, [props.children]);

  /* 事件处理*/
  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex]; // 获取某个元素; newEl.offsetLeft 是相对于父级定位元素的偏移量， 如果父级不是定位元素，则会往上找到body
    const newElOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
    setPosIndex(newIndex);
    setShowRight(totalDistanceRef.current > newElOffsetLeft); // 如果可滚动的距离 小于 已经滚过去的距离， 那就不可再滚动了（右边超出的部分已经全部展示了）
    setShowLeft(newElOffsetLeft > 0);
  }
  //   const leftClickHandler = () => {
  //     const newIndex = posIndex - 1;
  //     const newEl = scrollContentRef.current.children[newIndex]; // 获取某个元素; newEl.offsetLeft 是相对于父级定位元素的偏移量， 如果父级不是定位元素，则会往上找到body
  //     const newElOffsetLeft = newEl.offsetLeft;
  //     setPosIndex(newIndex);
  //     setShowRight(totalDistanceRef.current > newElOffsetLeft); // 如果可滚动的距离 小于 已经滚过去的距离， 那就不可再滚动了（右边超出的部分已经全部展示了）
  //     setShowLeft(newElOffsetLeft > 0);
  //   };
  //   const rightClickHandler = () => {
  //     const newIndex = posIndex + 1;
  //     const newEl = scrollContentRef.current.children[newIndex]; // 获取某个元素; newEl.offsetLeft 是相对于父级定位元素的偏移量， 如果父级不是定位元素，则会往上找到body
  //     const newElOffsetLeft = newEl.offsetLeft;
  //     scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
  //     setPosIndex(newIndex);
  //     // 是否继续显示右边的按钮
  //     setShowRight(totalDistanceRef.current > newElOffsetLeft); // 如果可滚动的距离 小于 已经滚过去的距离， 那就不可再滚动了（右边超出的部分已经全部展示了）
  //     setShowLeft(newElOffsetLeft > 0); // 已经往右滚动过了，才显示往左滚动的按钮
  //   };
  return (
    <ViewWrapper>
      {showLeft && (
        <div onClick={(e) => controlClickHandle(false)}>左边的按钮</div>
      )}
      {showRight && (
        <div onClick={(e) => controlClickHandle(true)}>右边的按钮</div>
      )}

      {/* 使用插槽 */}
      <div className="scroll-content" ref={scrollContentRef}>
        {props.children}
      </div>
    </ViewWrapper>
  );
});

// ScrollView.propTypes = {};

export default ScrollView;
