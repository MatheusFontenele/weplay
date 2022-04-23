import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 500px;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    background-color: #2e2e2e;
    border: 0;
    width: 100%;
    height: 40px;
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
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 0;

      height: 100%;
      width: 40px;

      background: #2e2e;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;

      border: 0;
    }
  }
`
