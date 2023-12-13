import { configureStore } from "@reduxjs/toolkit";
// 연동
import userSlice from "./userSlice.js";

export default configureStore({
    reducer: {
        user: userSlice,
    },
    // 에러 방지
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});