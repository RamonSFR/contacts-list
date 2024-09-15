import styled from 'styled-components'
import variables from '../../styles/variables'

const fullScreenOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`

export const Modal = styled(fullScreenOverlay)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Overlay = styled(fullScreenOverlay)`
  background-color: rgba(0, 0, 5, 0.7);
  z-index: 1;
`

export const ModalContent = styled.div`
  z-index: 2;
  background-color: ${variables.blue1};

  &,
  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }

  max-width: 516px;
  gap: 1em;
  padding: 2em 1.5em;

  border-radius: 6px;
  border: 1px solid ${variables.white1};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${variables.white1};
    margin-bottom: 16px;

    svg {
      color: ${variables.blue3};
      font-size: 2em;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        font-size: 2.5em;
      }
    }
  }

  form {
    gap: 1em;

    input {
      width: 100%;
      height: 3em;
      border: 1px solid rgba(25, 25, 25, 0.5);
      border-radius: 4px;
      padding: 0.5em 1em;
      outline: none;
      font-weight: bold;
    }

    button {
      width: 100%;
      height: 2em;
      background-color: ${variables.blue3};
      border: none;
      cursor: pointer;
      color: ${variables.white1};
      font-size: 18px;
      font-weight: bold;
      border-radius: 4px;
      text-shadow: 1px 1px 5px ${variables.white1};
      transition: 0.3s ease;

      &:hover {
        height: 2.5em;
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`
