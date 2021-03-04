import { v4 as uuidv4 } from 'uuid';
import {createAction} from '@reduxjs/toolkit'
// import types from './phonebook-types';


const addContact = createAction('phonebook/add', (name, number) => ({
    payload: {
        id: uuidv4(),
        name,
        number
    }
}));
const deleteContact = createAction('phonebook/delete');
const filterContacts = createAction('phonebook/changeFilter');

// eslint-disable-next-line
export default {addContact, deleteContact, filterContacts}



// const addContact = (name, number) => (
//     {
//         type: types.ADD,
//         payload: {
//             id: uuidv4(),
//             name,
//             number
//         }
//     }
// )

// const deleteContact = (id) => (
//     {
//         type: types.DELETE,
//         payload: id
//     }
// )

// const filterContacts = (value) => (
//     {
//         type: types.FILTER,
//         payload: value
//     }
// )

