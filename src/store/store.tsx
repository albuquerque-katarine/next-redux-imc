import { configureStore } from "@reduxjs/toolkit";

import ImcReducer from "./slices/imcSlice";
import HistoriaReducer from "./slices/histoicoSlice";

export const Store = configureStore({
    reducer: {
        'imc': ImcReducer,
        'historico': HistoriaReducer,
    }
}); 

export type RootState = ReturnType<typeof Store.getState>