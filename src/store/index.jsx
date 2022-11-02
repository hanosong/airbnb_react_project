// 配置store
import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
import detailReducer from "./modules/detail";
const store = configureStore({
  reducer: {
    home: homeReducer, // 通过createSlice配置
    entire: entireReducer, // 普通配置
    detail: detailReducer,
  },
});

// 直接导出是不会生效的，需要在index.js中导入provider
export default store;
