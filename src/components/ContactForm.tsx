import { useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { addContact, updateContact } from '../store/slices'
import type { Contact } from '../store/slices'
import { Button } from '../Global'
import { FormContct } from '../pages/styles'

type Props = {
  editing?: Contact | null
  onFinish?: () => void
}

export default function ContactForm({ editing = null, onFinish }: Props) {
  const dispatch = useAppDispatch()

  function maskPhone(value: string) {
    value = value.replace(/\D/g, '')
    if (value.length <= 10) {
      return value
        .replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
    } else {
      return value
        .replace(/^(\d{2})(\d{1})(\d{4})(\d{0,4})/, '($1) $2 $3-$4')
        .replace(/(-\d{4})\d+?$/, '$1')
    }
  }

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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^\(\d{2}\)\s?\d?\s?\d{4}-\d{4}$/

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
    if (email && !emailRegex.test(email)) {
      alert('Email inválido')
      return
    }
    if (!phoneRegex.test(phone)) {
      alert(
        'Telefone inválido. Use o formato (00) 0000-0000 ou (00) 0 0000-0000'
      )
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
    <>
      <FormContct as="form" onSubmit={handleSubmit}>
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
          onChange={(e) => setPhone(maskPhone(e.target.value))}
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Prévia" width={50} />}
        <Button type="submit">{editing ? 'Atualizar' : 'Adicionar'}</Button>
        {editing && (
          <Button type="button" onClick={() => onFinish && onFinish()}>
            Cancelar
          </Button>
        )}
      </FormContct>
    </>
  )
}
