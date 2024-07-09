import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../redux_states/sidebar-slice/sidebarSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      sidebar: sidebarSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
