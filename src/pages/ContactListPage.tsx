import { Pencil, Trash2 } from 'lucide-react'
import { useAppSelector } from '../hooks'

export default function ContactListPage() {
  const contacts = useAppSelector((state) => state.contacts.list)
  return (
    <div>
      {contacts.length === 0 && <p>Nenhum contato</p>}
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <img
              src={contact.image ?? undefined}
              alt={`Foto de perfil de ${contact.name}`}
              width={50}
              height={50}
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
            <strong>{contact.name}</strong>
            <h4>{contact.phone}</h4>
            <h4>{contact.email}</h4>
            <button>
              <Pencil />
            </button>
            <button>
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
