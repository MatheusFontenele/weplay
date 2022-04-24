import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 500px;
  height: 60px;
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    background-color: #2e2e2e;
    border: 0;
    width: 100%;
    height: 60px;
    position: absolute;
    z-index: 0;
    padding: 8px;

    border-radius: 4px;

    &::placeholder {
      font-size: 18px;
      font-weight: 800;
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
