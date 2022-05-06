import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background-color: #1a2127;

  position: fixed;
  z-index: 9;

  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5.5rem;

  button {
    margin: 0;
    border: 0;
  }

  .searchMach {
    height: 40px;
    width: 110px;

    color: #fff;

    font-size: 12px;
    font-weight: 500;
    padding: 8px;

    border-radius: 4px;

    background: linear-gradient(
      90deg,
      rgba(181, 212, 0, 1) 0%,
      rgba(194, 209, 0, 1) 70%
    );
  }

  .profileOptions {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 8px;

    height: 100%;
    width: 200px;
    .coinButton {
      background-color: #2f363e;
      border: 0;
      height: 40px;
      width: 110px;

      border-radius: 8px;
      padding: 8px 12px;
      color: #fff;
      font-size: 12px;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 4px;
      }
    }
  }
`
