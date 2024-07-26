import { configureStore } from '@reduxjs/toolkit';
import Expenditure from './ExpenditureStore';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExpenditureConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['data']
}

export const store = configureStore({
    reducer: {
        expenditure: persistReducer(ExpenditureConfig, Expenditure)
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store);