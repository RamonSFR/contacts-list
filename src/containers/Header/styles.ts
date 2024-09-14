import styled from 'styled-components'
import variables from '../../styles/variables'

export const Header = styled.header`
  width: 100%;
  padding: 5em 2em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  justify-content: center;
  background-color: ${variables.blue1};
  color: ${variables.white1};
  text-transform: uppercase;
  font-size: 1rem;
`
