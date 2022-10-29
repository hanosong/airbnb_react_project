import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import { Carousel } from "antd";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  const sliderRef = useRef();
  /**  事件处理的逻辑*/
  function controlClickHandle(isRignt = true) {
    // 上一个面板， 下一个面板
    isRignt ? sliderRef.current.next() : sliderRef.current.prev();
  }

  return (
    // verifyColor 从服务器动态获取颜色
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        {/* <div className="cover">
          <img src={itemData.picture_url} alt={1} />
        </div> */}
        {/* 改成轮播图 */}
        <div className="slider">
          <div className="control">
            <div
              className="btn left"
              onClick={(e) => controlClickHandle(false)}
            >
              <IconArrowLeft width="30" height="30px" />
            </div>
            <div
              className="btn right"
              onClick={(e) => controlClickHandle(true)}
            >
              <IconArrowRight width="30" height="30px" />
            </div>
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
