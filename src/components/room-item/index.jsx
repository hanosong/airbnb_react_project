import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  return (
    // verifyColor 从服务器动态获取颜色
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt={1} />
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
