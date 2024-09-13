import styled from 'styled-components'
import variables from '../../styles/variables'

export const Input = styled.input`
  margin-top: -1.25rem;
  margin-bottom: 2rem;
  height: 2.5rem;
  width: 45rem;
  padding: 12px 16px;
  border-radius: 6px;
  border: 0.1rem solid ${variables.blue3};
  outline: none;

  &::placeholder {
    color: ${variables.blue3};
  }
`
