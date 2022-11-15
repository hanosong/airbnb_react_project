import { useEffect, useState } from "react";
import { throttle } from "underscore";

export default function useScrollPosition() {
  // 记录位置的状态
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // 监听滚动
  useEffect(() => {
    // 由于记录滚动很频繁 => 需要节流 npm install underscore
    const handleScroll = throttle(function () {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }, 100); // 100ms内只执行一次
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // 返回出去 --- 如果有只想用一个的情况下，返回对象，不然数组解构需要占位符[,scrollY]
  return { scrollX, scrollY };
}
