import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { Carousel } from "antd";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const sliderRef = useRef();
  /**  事件处理的逻辑*/
  function controlClickHandle(isRignt = true) {
    // 上一个面板， 下一个面板
    isRignt ? sliderRef.current.next() : sliderRef.current.prev();
    // 拿到最新的索引
    let newIndex = isRignt ? selectIndex + 1 : selectIndex - 1;
    const length = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  }

  function itemClickHandle() {
    if (itemClick) itemClick(itemData); // 首页点击图片不让它跳转 => 把方法放到外面
  }

  // 子元素赋值
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt={1} />
    </div>
  );

  const slideElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false)}>
          <IconArrowLeft width="30" height="30px" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true)}>
          <IconArrowRight width="30" height="30px" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    // verifyColor 从服务器动态获取颜色
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {/* 首页还是轮播图？ 判断 */}
        {itemData.picture_urls ? slideElement : pictureElement}

        <div className="desc">{itemData.verify_info.messages.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}每晚</div>
        {/* sx自定义样式 */}
        {/* ?? => 当为undefined或者null 的时候才会用后面的值 */}
        <div className="bottom">
          <Rating
            name="read-only"
            value={itemData.star_rating ?? 5}
            precision={0.5}
            sx={{ fontSize: "12px", color: "#00848A" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData?.bottom_info?.content && (
            <span className="extra"> ·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
