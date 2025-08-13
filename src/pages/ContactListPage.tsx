import { Pencil, Trash2 } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'

interface Contact {
  id: string
  name: string
  email: string
  phone: string
  image?: string | null
}

const exampleContacts: Contact[] = [
  {
    id: uuidv4(),
    name: 'João da Silva',
    email: 'joao.silva@example.com',
    phone: '(11) 91234-5678',
    image: 'https://placehold.co/48'
  },
  {
    id: uuidv4(),
    name: 'Maria Oliveira',
    email: 'maria.oliveira@example.com',
    phone: '(21) 99876-5432',
    image: 'https://placehold.co/48'
  },
  {
    id: uuidv4(),
    name: 'Carlos Pereira',
    email: 'carlos.pereira@example.com',
    phone: '(31) 98765-4321',
    image: 'https://placehold.co/48'
  },
  {
    id: uuidv4(),
    name: 'Ana Souza',
    email: 'ana.souza@example.com',
    phone: '(41) 97654-3210',
    image: 'https://placehold.co/48'
  },
  {
    id: uuidv4(),
    name: 'Lucas Martins',
    email: 'lucas.martins@example.com',
    phone: '(51) 96543-2109',
    image: 'https://placehold.co/48'
  }
]

export default function ContactListPage() {
  // const contacts = useAppSelector(state => state.contacts.list)
  return (
    <div>
      <h1>Contatos</h1>
      {/* {contacts.length === 0 && <p>Nenhum contato</p>} */}
      <ul>
        {exampleContacts.map((contact) => (
          <li key={contact.id}>
            <img
              src={contact.image ?? undefined}
              alt={`Foto de perfil de ${contact.name}`}
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
