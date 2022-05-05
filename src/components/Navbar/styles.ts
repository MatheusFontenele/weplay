import styled from 'styled-components'

export const Container = styled.div`
  width: 90px;
  height: 100%;

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
