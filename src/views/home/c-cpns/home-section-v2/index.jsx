import React, { memo, useCallback, useState } from "react";
import PropTypes from "prop-types";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import { SectionV2Wrapper } from "./style";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;
  const [name, setName] = useState("佛山");
  const tabNames = infoData.dest_address?.map((item) => item.name);

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
