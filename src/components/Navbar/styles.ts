import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 90px;
  height: 100vh;

  background-color: #1a2127;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px;

  z-index: 10;
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
