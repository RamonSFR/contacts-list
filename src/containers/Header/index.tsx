import * as S from './styles'
import { MdContacts } from 'react-icons/md'

const Header = () => {
  return (
    <S.Header>
      <MdContacts size={35} />
      <h1>Meus contatos</h1>
    </S.Header>
  )
}

export default Header
