import React, { memo } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import { useState } from "react";
import classNames from "classnames";
const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandle(item) {
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      // 用户再次点击触发移除操作
      //找位置
      const itemIndex = newItems.findIndex((filterItem) => filterItem === item);
      newItems.splice(itemIndex, 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames("item", {
                // 判断用户点击
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
