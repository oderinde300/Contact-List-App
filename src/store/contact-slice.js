import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { DUMMY_DATA } from "./dataSet";

const contactInitialState = {
    contactList: [...DUMMY_DATA,],
    searchReasult: [],
    isSearching: false,
};

const contactSlice = createSlice({
    name: 'contact',
    initialState: contactInitialState,
    reducers: {
        addContact(state, action) {
            const newContact = action.payload;
            state.contactList.push({
                name: newContact.name,
                id: newContact.id,
                image_src: newContact.image_src,
                email: newContact.email
            });
        },
        removeContact(state, action) {
            const id = action.payload;
            state.contactList = state.contactList.filter(contact => id !== contact.id);
        },
        editContact(state, action) {
            const id = action.payload.id;
            const contactToEdit = state.contactList.find(contact => id === contact.id);
            contactToEdit.name = action.payload.name;
            contactToEdit.image_src = action.payload.image_src;
            contactToEdit.email = action.payload.email;
        },
        serchTermHandler(state, action) {
            const searchTerm = action.payload
            if (searchTerm.length < 1) {
                state.isSearching = false;
            } else {
                state.isSearching = true;
                const newContactList = state.contactList.filter(contact => {
                    return (Object.values(contact).join(" ")
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()));
                });
                state.searchReasult = newContactList
            }
        }
    }
});

export const contactActions = contactSlice.actions;

const store = configureStore({
    reducer: contactSlice.reducer
});

export default store;