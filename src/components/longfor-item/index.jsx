import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";

const LongforItem = memo((props) => {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className="inner">
        {/* info => 为了加圆角 */}
        <div className="item-info">
          <img className="cover" src={itemData.picture_url} alt="" />
          {/* 价格文字部分周围背景为半透明黑色 => 底部背景覆盖 */}
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">均价：{itemData.price}</div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
});

LongforItem.propTypes = {
  itemData: PropTypes.object,
};

export default LongforItem;
