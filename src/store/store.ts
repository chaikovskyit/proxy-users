import { userAPI } from './../services/UserService';
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from './reducers/UserReducer'

const rootReducers = combineReducers({
   userReducer,
   [userAPI.reducerPath]: userAPI.reducer

})

export const setupStore = () => {
  return configureStore({
     reducer: rootReducers,
     middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']