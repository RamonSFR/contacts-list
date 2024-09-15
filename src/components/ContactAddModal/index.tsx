import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { IoMdClose } from 'react-icons/io'
import * as S from './styles'
import { toggleModal } from '../../store/reducers/modal'

const ContactAddModal = () => {
  const { isActive } = useSelector((state: RootReducer) => state.modal)
  const dispatch = useDispatch()

  if (!isActive) return null

  return (
    <S.Modal>
      <S.Overlay onClick={() => dispatch(toggleModal())}></S.Overlay>
      <S.ModalContent>
        <div className="title">
          <h2>Adicionar novo contato</h2>
          <IoMdClose onClick={() => dispatch(toggleModal())} />
        </div>
        <form>
          <input required type="text" placeholder="Digite o nome" />
          <input required type="tel" placeholder="Digite o telefone" />
          <input required type="email" placeholder="Digite o email" />
          <button type="submit">Cadastrar</button>
        </form>
      </S.ModalContent>
    </S.Modal>
  )
}

export default ContactAddModal
