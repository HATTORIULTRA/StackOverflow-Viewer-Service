import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '@/4_features/search-form/model/searchSlice';
import quickViewReducer from '@/4_features/quick-view/model/quickViewSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    quickView: quickViewReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
