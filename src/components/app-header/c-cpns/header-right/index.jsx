import IconAvatar from "@/assets/svg/icon_avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  /** 定义组件内部的状态 */
  const [showPanel, setShowPanel] = useState(false);

  /**副作用代码 */
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }
    window.addEventListener(
      "click",
      windowHandleClick,
      true // 使用第二个参数， 设置事件冒泡为捕获(防止无法弹出)
    );

    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);

  /**事件处理函数 */
  function profileClickHandle() {
    console.log(1);
    setShowPanel(true);
  }
  console.log(showPanel, 2);
  // 监听window的点击，并关闭弹窗
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />

        {/* 点击弹出的小面板 */}
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
