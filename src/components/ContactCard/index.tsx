import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import Contact from '../Contact'
import * as S from './styles'

const ContactCard = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts)

  return (
    <S.ContactCard>
      <S.Titulo>
        <h2>Contatos criados</h2>
        <span>0</span>
      </S.Titulo>
      {contacts.map((t) => (
        <Contact key={t.name} name={t.name} phone={t.phone} email={t.email} />
      ))}
    </S.ContactCard>
  )
}

export default ContactCard
