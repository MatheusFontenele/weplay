import styled from 'styled-components'

export const Container = styled.div`
  width: 90px;
  height: 100vh;

  position: fixed;

  background-color: #1a2127;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 8px;

  top: 0;

  z-index: 9;
  .selected {
  }
`

export const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
