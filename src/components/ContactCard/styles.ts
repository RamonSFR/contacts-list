import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContactCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  color: ${variables.blue1};
  gap: 16px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Titulo = styled.div`
  display: flex;
  gap: 12px;

  h2 {
    font-size: 22px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 25, 0.4);
  }

  span {
    background-color: rgba(0, 0, 0, 0.5);
    color: ${variables.white1};
    padding: 2px 6px;
    border-radius: 4px;
  }
`

export const ContactsArea = styled.div`
  width: 100%;
  overflow-y: scroll;
`
