import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IoMdClose } from 'react-icons/io'

import { RootReducer } from '../../store'
import * as S from './styles'
import { toggleModal } from '../../store/reducers/modal'
import { add } from '../../store/reducers/contacts'

const ContactAddModal = () => {
  const { isActive } = useSelector((state: RootReducer) => state.modal)
  const contacts = useSelector((state: RootReducer) => state.contacts.itens) // Pegamos os contatos atuais
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const addContact = (e: FormEvent) => {
    e.preventDefault()

    const contactAlreadyExist = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )

    if (contactAlreadyExist) {
      alert('Já existe um contato com este nome')
      return
    }

    dispatch(
      add({
        name,
        phone,
        email
      })
    )

    dispatch(toggleModal())
  }

  if (!isActive) return null

  return (
    <S.Modal>
      <S.Overlay onClick={() => dispatch(toggleModal())}></S.Overlay>
      <S.ModalContent>
        <div className="title">
          <h2>Adicionar novo contato</h2>
          <IoMdClose onClick={() => dispatch(toggleModal())} />
        </div>
        <form onSubmit={addContact}>
          <input
            required
            type="text"
            placeholder="Digite o nome"
            onChange={({ target }) => setName(target.value)}
          />
          <input
            required
            type="tel"
            placeholder="Digite o telefone"
            onChange={({ target }) => setPhone(target.value)}
          />
          <input
            required
            type="email"
            placeholder="Digite o email"
            onChange={({ target }) => setEmail(target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </S.ModalContent>
    </S.Modal>
  )
}

export default ContactAddModal
