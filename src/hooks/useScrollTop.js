import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function useScrollTop() {
  const location = useLocation();
  // 监听路径是否发生改变 location.pathname => 页面切换
  useEffect(() => {
    window.scrollTo(0, 0); // 发生切换则回滚到顶部
  }, [location.pathname]);
}
