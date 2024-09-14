import { useState } from 'react'

import { FaEdit, FaSave } from 'react-icons/fa'
import { IoPersonRemove } from 'react-icons/io5'
import { ImCancelCircle } from 'react-icons/im'

import { remove } from '../../store/reducers/contacts'

import * as S from './styles'
import { ContactObj } from '../../store/reducers/contacts'
import { useDispatch } from 'react-redux'

type Props = ContactObj

const Contact = ({ name, phone, email, id }: Props) => {
  const [isEditing, setisEditing] = useState(false)
  const dispatch = useDispatch()

  return (
    <S.Cont isEditing={isEditing}>
      <img src="https://img.icons8.com/?size=100&id=98957&format=png&color=000000" />
      <div>
        <h2>{name}</h2>
        <p>{phone}</p>
        <p>{email}</p>
      </div>

      {isEditing ? (
        <S.Buttons>
          <FaSave onClick={() => setisEditing(false)} />
          <ImCancelCircle onClick={() => setisEditing(false)} />
        </S.Buttons>
      ) : (
        <S.Buttons>
          <FaEdit onClick={() => setisEditing(true)} />
          <IoPersonRemove onClick={() => dispatch(remove(id))} />
        </S.Buttons>
      )}
    </S.Cont>
  )
}

export default Contact
