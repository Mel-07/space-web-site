import { configureStore } from '@reduxjs/toolkit'
import slice from './Slice.ts'

export const store = configureStore({
    
    reducer:{
        slice
    }
})
export type RootState = ReturnType< typeof store.getState >
export type AppDispatch = typeof store.dispatch