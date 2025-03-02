import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {baseApi as api} from "./services/baseApi"
import authReducer from "./features/auth/authSlice"
import userSlice from "./features/auth/userSlice"
import useSearchSlice from "../redux/features/useSearchSlice"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {rtkQueryErrorLogger} from "./rtkQueryErrorLogger"

const persistConfigUser = {
  key: "user",
  version: 1,
  storage,
}

const persistedUserReducer = persistReducer(persistConfigUser, userSlice)

const rootReducer = combineReducers({
  auth: authReducer,
  searchSlice: useSearchSlice,
  user: persistedUserReducer,
  [api.reducerPath]: api.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(api.middleware)
      .concat(rtkQueryErrorLogger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
export const persistor = persistStore(store)
