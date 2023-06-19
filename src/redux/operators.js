import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk('contact/get', async () => {
    try {
        const reponse = await axios.get('https://648a031d5fa58521cab0a151.mockapi.io/Contacts');
        return reponse.data;
    } catch (err) { 
        return err
    }
})