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
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(name)
  const [editedPhone, setEditedPhone] = useState(phone)
  const [editedEmail, setEditedEmail] = useState(email)
  const dispatch = useDispatch()

  return (
    <S.Cont>
      <img src="https://img.icons8.com/?size=100&id=98957&format=png&color=000000" />
      <div className="infos">
        {!isEditing ? (
          <>
            <h2>{name}</h2>
            <p>{phone}</p>
            <p>{email}</p>
          </>
        ) : (
          <>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <input
              type="text"
              value={editedPhone}
              onChange={(e) => setEditedPhone(e.target.value)}
            />
            <input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
          </>
        )}
      </div>

      {isEditing ? (
        <S.Buttons>
          <FaSave onClick={() => setIsEditing(false)} />
          <ImCancelCircle onClick={() => setIsEditing(false)} />
        </S.Buttons>
      ) : (
        <S.Buttons>
          <FaEdit onClick={() => setIsEditing(true)} />
          <IoPersonRemove onClick={() => dispatch(remove(id))} />
        </S.Buttons>
      )}
    </S.Cont>
  )
}

export default Contact
