// 配置store
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./modules/main";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
import detailReducer from "./modules/detail";
const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer, // 通过createSlice配置
    entire: entireReducer, // 普通配置
    detail: detailReducer,
  },
});

export default store;
