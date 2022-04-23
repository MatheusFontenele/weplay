import styled from 'styled-components'

export const Container = styled.div`
  width: 80px;
  height: 100vh;

  background-color: #353940;

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
