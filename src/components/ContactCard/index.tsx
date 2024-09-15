import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import Contact from '../Contact'
import * as S from './styles'

import { ImFileEmpty } from 'react-icons/im'
import { toggleModal } from '../../store/reducers/modal'

const ContactCard = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.itens)
  const { searchTerm } = useSelector((state: RootReducer) => state.filters)
  const contactsEmpty = contacts.length === 0
  const dispatch = useDispatch()

  const contactsFilter = () => {
    return contacts.filter(
      (c) => c.name.toLowerCase().search(searchTerm.toLowerCase()) >= 0
    )
  }

  return (
    <S.ContactCard>
      <S.Titulo>
        <h2>Contatos criados</h2>
        <span>{contacts.length}</span>
      </S.Titulo>
      {!contactsEmpty ? (
        <>
          {contactsFilter().map((t) => (
            <Contact
              key={t.name}
              name={t.name}
              phone={t.phone}
              email={t.email}
              id={t.id}
            />
          ))}
        </>
      ) : (
        <S.NoContacts>
          <ImFileEmpty />
          <h2>Você não tem nenhum contato salvo</h2>
          <p onClick={() => dispatch(toggleModal())}>adicione mais contatos</p>
        </S.NoContacts>
      )}
    </S.ContactCard>
  )
}

export default ContactCard
