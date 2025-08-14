import { useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { addContact, updateContact } from '../store/slices'
import type { Contact } from '../store/slices'

type Props = {
  editing?: Contact | null
  onFinish?: () => void
}

export default function ContactForm({ editing = null, onFinish }: Props) {
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    if (editing) {
      setName(editing.name)
      setEmail(editing.email)
      setPhone(editing.phone)
      setImage(editing.image || null)
    } else {
      setName('')
      setEmail('')
      setPhone('')
      setImage(null)
    }
  }, [editing])

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setImage(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) {
      alert('Nome e celular são obrigatórios')
      return
    }

    if (editing) {
      dispatch(updateContact({ id: editing.id, name, email, phone, image }))
      if (onFinish) onFinish()
    } else {
      dispatch(addContact({ name, email, phone, image }))
      setName('')
      setEmail('')
      setPhone('')
      setImage(null)
      if (onFinish) onFinish()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Prévia" width={50} />}
      <button type="submit">{editing ? 'Atualizar' : 'Adicionar'}</button>
      {editing && (
        <button type="button" onClick={() => onFinish && onFinish()}>
          Cancelar
        </button>
      )}
    </form>
  )
}
