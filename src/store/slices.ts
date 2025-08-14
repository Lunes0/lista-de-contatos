import { createSlice, type PayloadAction, nanoid } from '@reduxjs/toolkit'

export interface Contact {
  id: string
  name: string
  email: string
  phone: string
  image?: string | null
}

type ContactsState = {
  list: Contact[]
}

const initialState: ContactsState = {
  list: []
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action: PayloadAction<Contact>) {
        state.list.push(action.payload)
      },
      prepare(payload: Omit<Contact, 'id'>) {
        return { payload: { id: nanoid(), ...payload } }
      }
    },
    removeContact(state, action: PayloadAction<string>) {
      state.list = state.list.filter((c) => c.id !== action.payload)
    },
    updateContact(state, action: PayloadAction<Contact>) {
      const idx = state.list.findIndex((c) => c.id === action.payload.id)
      if (idx >= 0) state.list[idx] = action.payload
    },
    // útil para carregar estado direto (não obrigatório)
    setContacts(state, action: PayloadAction<Contact[]>) {
      state.list = action.payload
    }
  }
})

export const { addContact, removeContact, updateContact, setContacts } =
  contactsSlice.actions
export default contactsSlice.reducer
