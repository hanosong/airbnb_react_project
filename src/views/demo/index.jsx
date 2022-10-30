import Indicator from "@/base-ui/indicator";
import React, { memo } from "react";
import { useState } from "react";
import { DemoWrapper } from "./style";

const Demo = memo(() => {
  const names = ["11", "22", "33", "44", "55", "66", "77", "88", "99"];
  // 记录选中的是谁
  const [selectIndex, setSelectIndex] = useState(0);

  function toggleClickHandle(isNext = true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    // 两种越界的情况
    if (newIndex < 0) newIndex = names.length - 1;
    if (newIndex > names.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={(e) => toggleClickHandle(false)}>上一个</button>
        <button onClick={(e) => toggleClickHandle(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {names.map((item) => (
            <button key={item}>{item}</button>
          ))}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
