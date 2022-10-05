import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import blogReducer from '../features/blog/blogSlice';
import experienceReducer from '../features/experience/experienceSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    experience: experienceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
