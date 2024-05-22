import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import noteSlice from "./NoteSlice";

const reduxStore = configureStore({
    reducer: {
        userDetails: userSlice.reducer,
        noteDetails: noteSlice.reducer,
    }
})

export default reduxStore;