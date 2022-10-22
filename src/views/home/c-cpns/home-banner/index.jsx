import React, { memo } from "react";
import { BannerWrapper } from "./style";
/*
    webpack img中如何引入图片？
    import coverImg from '@/assets/img/cover_01.jpeg'
*/
const HomeBanner = memo(() => {
  return (
    <BannerWrapper>
      {/* <img src={coverImg} alt='webpack动态导入图片'/> */}
    </BannerWrapper>
  );
});

export default HomeBanner;
