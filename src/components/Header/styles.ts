import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: #353940;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 6px;

  border-left: 1px solid #616161;
  border-right: 1px solid #616161;
  border-bottom: 0.5px solid #616161;
  button {
    margin: 0;
  }

  .searchMach {
    color: #fff;

    font-size: 16px;
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
      background-color: #4f4f4f;
      border: 0;
      height: 60px;

      border-radius: 8px;
      padding: 8px 12px;
      color: #fff;
      font-size: 16px;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 4px;
      }
    }
  }
`
