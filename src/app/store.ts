import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/authSlice/authSlice';
import { authApi } from "../services/authApi"
import { apiSlice } from './api/apiSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,

    // dave
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware, 
    // apiSlice.middleware
    ),
  devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch)
