import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;

  top: 0;
  right: 0;

  background-color: #1a2127;
  width: 80px;
  height: 100%;
  padding: 8px;

  display: flex;
  flex-direction: column;

  z-index: 10;

  span {
    font-family: 'Montserrat';
    font-size: 12px;
    margin-bottom: 12px;
  }
`
