import { useParams, useNavigate } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { useAppSelector } from '../hooks'

export default function EditContactPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const contact = useAppSelector((state) =>
    state.contacts.list.find((c) => c.id === id)
  )
  if (!contact) return <p>Contato não encontrado</p>

  return (
    <div>
      <h2>Editar Contato</h2>
      <ContactForm editing={contact} onFinish={() => navigate('/')} />
    </div>
  )
}
