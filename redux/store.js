import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TypedUseSelectorHook, useSelector as rawUseSelector } from 'react-redux';
import userSlice from "./user"


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    devTools: process.env.NODE_ENV !== 'production',
  };

  const rootReducer  = combineReducers({
    // onboard: onboardSlice,
    // user: userSlice
    
    user: userSlice
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});



export const persistor = persistStore(store);

