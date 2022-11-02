import IconClose from "@/assets/svg/icon-close";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useEffect } from "react";
import { BrowserWrapper } from "./style";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  // 当图片浏览器展示出来时,需要让滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = "hidden"; // 默认是auto,超出部分会有滚动条

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  /** 事件监听*/
  function closeBtnClickHandle() {
    if (closeClick) closeClick();
  }
  return (
    <BrowserWrapper>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="list"></div>
      <div className="indicator"></div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
};

export default PictureBrowser;
