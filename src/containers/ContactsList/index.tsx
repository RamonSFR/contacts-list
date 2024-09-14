import ContactCard from '../../components/ContactCard'
import Input from '../../components/Input'
import * as S from './styles'
const ContactsList = () => {
  return (
    <S.ContactsList>
      <S.Container>
        <Input />
        <ContactCard />
      </S.Container>
    </S.ContactsList>
  )
}

export default ContactsList
