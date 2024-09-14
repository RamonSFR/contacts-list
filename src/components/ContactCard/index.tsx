import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import Contact from '../Contact'
import * as S from './styles'

import { ImFileEmpty } from 'react-icons/im'

const ContactCard = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.itens)
  const contactsEmpty = contacts.length === 0

  return (
    <S.ContactCard>
      <S.Titulo>
        <h2>Contatos criados</h2>
        <span>{contacts.length}</span>
      </S.Titulo>
      {!contactsEmpty ? (
        <>
          {contacts.map((t) => (
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
          <p>adicione mais contatos</p>
        </S.NoContacts>
      )}
    </S.ContactCard>
  )
}

export default ContactCard
