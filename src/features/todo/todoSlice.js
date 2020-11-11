import {createSlice} from '@reduxjs/toolkit'

let todoId = 1;

export const slice = createSlice = ({
    name: 'todos',
    initialState: [],
    reducers: {
        create: (state, action) => {
            const {payload} = action;
            
        }
    }
})