import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 500px;
  height: 45px;
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    background-color: #2e2e2e;
    border: 0;
    width: 100%;
    height: 45px;
    position: absolute;
    z-index: 0;
    padding-left: 8px;
    padding-bottom: 8px;

    border-radius: 4px;

    &::placeholder {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .searchContent {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      z-index: 10;

      right: 1px;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 0;

      height: 100%;
      width: 60px;

      background: #2e2e;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;

      border: 0;
    }
  }
`
