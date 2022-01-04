import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    async () => {
        const response = await fetch('http://localhost:5000/events')
            .then(res => res.json())
        return response
    }
)

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        services: [],
        orderList: [],
        status: 'idle'
    },
    reducers: {
        addToOrderList: (state, { payload }) => {
            state.orderList.push(payload)
        },
        removeFromOrderList: (state, { payload }) => {
            state.orderList = state.orderList.filter(book => book.id !== payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            state.services = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchEvents.pending, (state, action) => {
            state.status = 'pending';
        })
    },

});

export const { addToOrderList, removeFromOrderList } = eventsSlice.actions;

export default eventsSlice.reducer;

