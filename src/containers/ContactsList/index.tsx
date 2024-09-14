import { useDispatch, useSelector } from 'react-redux'

import ContactCard from '../../components/ContactCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { setSearchTerm } from '../../store/reducers/filter'

const ContactsList = () => {
  const dispatch = useDispatch()
  const { searchTerm } = useSelector((state: RootReducer) => state.filters)

  return (
    <S.ContactsList>
      <S.Container>
        <S.Input
          type="text"
          placeholder="Pesquisar pelo nome"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        <ContactCard />
      </S.Container>
    </S.ContactsList>
  )
}

export default ContactsList
