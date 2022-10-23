import React, { memo, useCallback, useState } from "react";
import PropTypes from "prop-types";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import { SectionV2Wrapper } from "./style";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  /** 从props获取数据 */
  const { infoData } = props;
  /** 定义内部的state*/
  /**
   * 这里的初始值不能写死佛山 => 解决思路：
   * 1. 声明一个初始值是对象的第一个key的value： const intName = Objcect.keys(infoData.dest_list ?? {} )[0] ?? ""; 必须有个默认值空对象，因为第一次从redux中取到的是undefined，掉完接口之后才是有对象;[][0] === undefined
   * => useState的初始值，只有组件第一次渲染时才是有效的，intName已经是第二次渲染的时候了
   * => 解决：1.阻止组件的第一次渲染，{Object.keys(discountInfo).length && <HomeSectionV2 infoData={discountInfo}>}
   * 2. 使用useEffect监听infoData => 会造成三次渲染
   * => useEffect(() => { setName("Xx")}, [infoData])
   */
  const [name, setName] = useState("佛山");
  const tabNames = infoData.dest_address?.map((item) => item.name);

  /**数据转换 */
  // 使用callback，防止每次都传入一个新的函数
  const tabClickHandle = useCallback(function (index, name) {
    // 根据name，对数据做过滤、
    setName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms
        roomList={infoData.dest_list?.[name]}
        itemWidth="33.3333%"
      />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
