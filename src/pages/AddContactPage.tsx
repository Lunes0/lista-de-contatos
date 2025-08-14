import { useNavigate } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

export default function AddContactPage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Adicionar Contato</h1>
      <ContactForm onFinish={() => navigate('/')} />
    </div>
  )
}
