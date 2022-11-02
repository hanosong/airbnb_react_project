import React, { memo } from "react";
import { PicturesWrapper } from "./style";
import { useSelector } from "react-redux";
const DetailPictures = memo(() => {
  /** 从redux中获取数据*/
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));
  return <PicturesWrapper>DetailPictures</PicturesWrapper>;
});

export default DetailPictures;
