import { createSlice } from "@reduxjs/toolkit";

type ImcValue = {    
    value: number;
};

const initialState: ImcValue = {
    value: 0
};

export const ImcSlice = createSlice({
    name: 'imc',
    initialState,
    reducers: {
        calcular: (state, action) => {           

            const { peso, altura } = action.payload;

            let imc = peso / (altura * altura);

            state.value = imc;
        }
    }
});

export const {calcular} = ImcSlice.actions;

export default ImcSlice.reducer;