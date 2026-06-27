import { createSlice } from "@reduxjs/toolkit";

type Historico = {
    peso: number;
    altura: number;
    imc: number;
};

type HistoriaState = {
    value: Historico[];
};

const initialState: HistoriaState = {
    value: []
};

export const HistoricoSlice = createSlice({
    name: 'historico',
    initialState,
    reducers: {
        adicionar: (state, action) => {

            const {peso,altura, imc} = action.payload;
            
            state.value.push({peso, altura, imc});
        },
        limpar: (state) => {
            state.value = [];
        }
    }
});

export const {adicionar, limpar} = HistoricoSlice.actions;

export default HistoricoSlice.reducer;