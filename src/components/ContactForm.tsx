import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  // const [image, setImage] = useState<string | null>(null)

  const mostraValores = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(name, email, phone)
  }

  const navigate = useNavigate()
  return (
    <form onSubmit={mostraValores}>
      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {/* <input
        type="file"
        accept="image/*"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      /> */}
      <button type="submit" onClick={() => navigate('/')}>
        Adicionar
      </button>
      <button onClick={() => navigate('/')}>Cancelar</button>
    </form>
  )
}
