import { useState } from 'react'

import { FaEdit, FaSave } from 'react-icons/fa'
import { IoPersonRemove } from 'react-icons/io5'
import { ImCancelCircle } from 'react-icons/im'

import * as S from './styles'
import { ContactObj } from '../../store/reducers/contacts'

type Props = ContactObj

const Contact = ({ name, phone, email }: Props) => {
  const [estaEditando, setEstaeditando] = useState(false)

  return (
    <S.Cont>
      <img src="https://img.icons8.com/?size=100&id=98957&format=png&color=000000" />
      <div>
        <h2>{name}</h2>
        <p>{phone}</p>
        <p>{email}</p>
      </div>

      {estaEditando ? (
        <S.Buttons>
          <FaSave size={25} onClick={() => setEstaeditando(false)} />
          <ImCancelCircle size={25} onClick={() => setEstaeditando(false)} />
        </S.Buttons>
      ) : (
        <S.Buttons>
          <FaEdit size={25} onClick={() => setEstaeditando(true)} />
          <IoPersonRemove size={25} />
        </S.Buttons>
      )}
    </S.Cont>
  )
}

export default Contact
