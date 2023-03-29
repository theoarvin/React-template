import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feature/user.slice";

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
