import styled from 'styled-components'

export const Container = styled.div`
  height: 400px;
  width: 305px;

  background-color: transparent;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  border: 1px solid #2e2e2e;

  position: relative;
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 13px;
    outline: none;
    border: 0;

    .playersCount {
      width: 160px;
      height: 36px;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;

      bottom: 24px;

      background: #000;

      color: #fff;
      font-size: 14px;
      font-weight: 500;

      border-radius: 18px;

      strong {
        color: yellow;
      }
    }
  }
`
