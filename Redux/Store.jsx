import { configureStore } from "@reduxjs/toolkit";
import ZstoreReducer from "./Z-store"

export const store = configureStore({
    reducer: {
      zstore: ZstoreReducer
  },
});
