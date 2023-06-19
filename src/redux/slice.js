import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operators";

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    },
    filter: '',
}

const rootReducer = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchContacts.pending, state => { state.contacts.isLoading = true })
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            console.log(action.payload);
            state.contacts.items = action.payload ;
            state.contacts.isLoading = false;
        })
        builder.addCase(fetchContacts.rejected, (state, action) => {
            state.contacts.error = action.payload ;
            state.contacts.isLoading = false;
        })
    }
})


export default rootReducer.reducer