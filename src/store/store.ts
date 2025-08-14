import { configureStore } from '@reduxjs/toolkit'
import contactsReducer, { type Contact } from './slices'

// Função para carregar contatos do localStorage
function loadState(): { list: Contact[] } | undefined {
  try {
    const data = localStorage.getItem('contacts_state')
    if (!data) return undefined
    const parsed = JSON.parse(data)
    // Ensure the loaded state has the correct shape
    if (parsed && Array.isArray(parsed.list)) {
      return parsed
    }
    return undefined
  } catch (e) {
    console.warn('Erro ao carregar estado do localStorage:', e)
    return undefined
  }
}

// Função para salvar contatos no localStorage
function saveState(contacts: { list: Contact[] }) {
  try {
    const data = JSON.stringify(contacts)
    localStorage.setItem('contacts_state', data)
  } catch (e) {
    console.warn('Erro ao salvar estado no localStorage:', e)
  }
}

const persisted = loadState()

export const store = configureStore({
  reducer: {
    contacts: contactsReducer
  },
  // preloadedState precisa ter a mesma forma do root reducer
  preloadedState: persisted ? { contacts: persisted } : undefined
})

// Salva apenas a fatia contacts no localStorage sempre que o store mudar
store.subscribe(() => {
  saveState({ list: store.getState().contacts.list })
})

// Exporta tipos úteis para o TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
