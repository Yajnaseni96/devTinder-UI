import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
    name: "connections",
    initialState: null,
    reducers: {
        addConnection: (state, action) => {
            return action.payload;
        },
        removeConnection: (state, action) => {
            return null;
        }
    }
});

const {addConnection, removeConnection} = connectionsSlice.actions;
export { addConnection, removeConnection };
export default connectionsSlice.reducer;
