import { createSlice } from '@reduxjs/toolkit';

const Expenditure = createSlice({
    name: 'expenditure',
    initialState: {
        data: {}
    },
    reducers: {
        addItem: (state, action) => {

            const temp = state.data;
            const year = action.payload.createdAt.getUTCFullYear();
            const month = action.payload.createdAt.getUTCMonth()+1;

            if(year in temp) {
                if(month in temp[year]) {
                    temp[year][month].push(action.payload);
                } else {
                    temp[year][month] = [action.payload]
                }
            } else {
                temp[year] = {}
                temp[year][month] = [action.payload]
            }

            state = { ...state, data: { ...temp } }

        },
        removeAll: (state) => ({
            ...state,
            data: {}
        })
    }
})

export const { addItem, removeAll } = Expenditure.actions;

export default Expenditure.reducer;