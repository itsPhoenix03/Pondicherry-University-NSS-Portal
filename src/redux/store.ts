import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import profileSlice from "./slices/profileSlice";
import registrationLinkSlice from "./slices/registrationLinkSlice";
import persistStore from "redux-persist/es/persistStore";
import eventSlice from "./slices/eventSlice";
import newsSlice from "./slices/newsSlice";
import adminActionsSlice from "./slices/adminActionsSlice";

// Persist Config
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  profile: profileSlice,
  events: eventSlice,
  news: newsSlice,
  registrationLink: registrationLinkSlice,
  adminAction: adminActionsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Persisted store export
// eslint-disable-next-line prefer-const
export let persistor = persistStore(store);

export default store;
