import styled from 'styled-components'
import variables from '../../styles/variables'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  right: 40px;
  bottom: 40px;
  font-size: 40px;
  border-radius: 50%;
  position: fixed;
  text-decoration: none;
  background-color: ${variables.blue3};
  color: ${variables.white1};
  cursor: pointer;
  border: 2px solid ${variables.white1};
  transition: 0.3s ease;

  &:hover {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
    height: 32px;
    width: 32px;
    right: 5px;
    bottom: 20px;

    &:hover {
      width: 38px;
      height: 38px;
    }
  }
`
