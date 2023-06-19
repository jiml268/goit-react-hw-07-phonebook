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

export const addContacts = createAsyncThunk('contact/post', async data => {
    const newContact = {
        name: data.name,
        phone: data.phone,
        createAT: Date.now()
    }
    try {
        const reponse = await axios.post('https://648a031d5fa58521cab0a151.mockapi.io/Contacts', newContact);
        console.log(reponse.data);
    } catch (err) { 
        return err
    }
})
