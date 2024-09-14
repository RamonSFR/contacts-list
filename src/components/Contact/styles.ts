import { styled } from 'styled-components'
import variables from '../../styles/variables'

export const Cont = styled.div`
  width: 100%;
  padding: 1.5em 1em;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  align-items: center;
  background-color: ${variables.white1};
  border-radius: 6px;
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4);

  img {
    width: 50px;
  }

  svg {
    cursor: pointer;
  }

  h2 {
    font-size: 1.25em;
    font-weight: bold;
  }

  p {
    font-size: 0.85em;
  }

  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;

    img {
      width: 100px;
    }
  }

  @media (max-width: 768px) {
    padding: 1em;
    gap: 0.5em;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
`
