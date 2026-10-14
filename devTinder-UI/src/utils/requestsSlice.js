import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "requests",
    initialState: null,
    reducers: {
        addRequest: (state, action) => {
            return action.payload;
        },
        removeRequest: (state, action) => {
            return null;
        }
    }
});

const {addRequest, removeRequest} = requestSlice.actions;
export { addRequest, removeRequest };
export default requestSlice.reducer;
