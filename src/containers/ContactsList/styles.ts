import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContactsList = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 32px;
  display: flex;
`

export const Container = styled.div`
  max-width: 896px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`

export const Input = styled.input`
  margin-top: -1.25rem;
  margin-bottom: 4rem;
  height: 2.5rem;
  width: clamp(20rem, 60vw, 45rem);
  max-width: 80vw;
  padding: 12px 16px;
  border-radius: 6px;
  border: 0.1rem solid ${variables.blue3};
  outline: none;

  &::placeholder {
    color: ${variables.blue3};
  }
`
