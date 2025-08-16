import { Pencil, Trash2 } from 'lucide-react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { removeContact } from '../store/slices'
import {
  ButtonCard,
  ButtonsAction,
  Card,
  ContactList,
  DeleteConfirm
} from './styles'
import { Button } from '../Global'

export default function ContactListPage() {
  const contacts = useAppSelector((state) => state.contacts.list)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleDelete = (id: string) => {
    setDeletingId(id)
  }

  const confirmDelete = () => {
    if (deletingId) {
      dispatch(removeContact(deletingId))
      setDeletingId(null)
    }
  }

  const cancelDelete = () => {
    setDeletingId(null)
  }

  const deletingContact = contacts.find((c) => c.id === deletingId)

  return (
    <ContactList>
      {contacts.length === 0 && <p>Nenhum contato</p>}
      <ul>
        {contacts.map((contact) => (
          <Card as="li" key={contact.id}>
            <img
              src={
                contact.image ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&background=random`
              }
              alt={`Foto de perfil de ${contact.name}`}
            />
            <div className="info">
              <strong>{contact.name}</strong>
              <div className="details">
                <h4>{contact.phone}</h4>
                <h4>{contact.email}</h4>
              </div>
            </div>
            <ButtonsAction>
              <ButtonCard onClick={() => navigate(`/edit/${contact.id}`)}>
                <Pencil />
              </ButtonCard>
              <ButtonCard onClick={() => handleDelete(contact.id)}>
                <Trash2 />
              </ButtonCard>
            </ButtonsAction>
          </Card>
        ))}
      </ul>
      {deletingId && deletingContact && (
        <DeleteConfirm>
          <div>
            <p>
              Tem certeza que deseja excluir{' '}
              <strong>{deletingContact.name}</strong>?
            </p>
            <Button
              onClick={confirmDelete}
              style={{ marginRight: 8, marginTop: 8 }}
            >
              Confirmar
            </Button>
            <Button onClick={cancelDelete}>Cancelar</Button>
          </div>
        </DeleteConfirm>
      )}
    </ContactList>
  )
}
