import PropTypes from "prop-types";
import React, { memo, useState, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconClose from "@/assets/svg/icon-close";
import { BrowserWrapper } from "./style";
import IconTriangelArrowBottom from "@/assets/svg/icon_triangle_arrow_bottom";
import Indicator from "../indicator";
import classNames from "classnames";
import IconTriangleArrowTop from "@/assets/svg/icon_triangle-arrow-top";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNedxt] = useState(true);
  const [showList, setShowList] = useState(true);
  // 当图片浏览器展示出来时,需要让滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = "hidden"; // 默认是auto,超出部分会有滚动条
    setIsNedxt(isNext);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  /** 事件监听*/
  function closeBtnClickHandle() {
    if (closeClick) closeClick();
  }

  function controlClickHandle(isNext = true) {
    const newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    // 越界判断
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;

    setCurrentIndex(newIndex);
    setIsNedxt(isNext); // 记录
  }
  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77/" />
          </div>
        </div>
        <div className="picture">
          {/* in-out=> 先进入再做动画 */}
          <SwitchTransition mode="in-out">
            {/* 通过key的不同来切换动画,根据className来给过渡动画,timeout过渡动画时间 */}
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={150}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="perview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1} / {pictureUrls.length} :
              </span>
              <span>room apartment 图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              {showList ? (
                <IconTriangelArrowBottom />
              ) : (
                <IconTriangleArrowTop />
              )}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex === index,
                    })}
                    key={item}
                    // 点击小图片,切换大图片
                    onClick={(e) => setCurrentIndex(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
};

export default PictureBrowser;
