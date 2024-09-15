import { useDispatch } from 'react-redux'
import { toggleModal } from '../../store/reducers/modal'
import { Button } from './styles'

const AddBtn = () => {
  const dispatch = useDispatch()

  return <Button onClick={() => dispatch(toggleModal())}>+</Button>
}

export default AddBtn
