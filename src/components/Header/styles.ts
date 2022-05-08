import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background-color: #1a2127;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 10;

  padding: 0 16px;

  top: 0;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1820px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu {
    width: 33.3%;
  }

  button {
    margin: 0;
    border: 0;
  }

  .searchMach {
    height: 40px;
    width: 110px;

    margin-left: 12px;

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
    justify-content: flex-end;
    align-items: center;

    padding: 8px;

    height: 100%;
    width: 33.3%;

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

      margin-right: 12px;
      svg {
        margin-right: 4px;
      }
    }
  }
`
export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 4px;

  padding: 6px;

  border-radius: 8px;

  img {
    width: 35px;
    height: 35px;
    border-radius: 8px;
  }

  span {
    font-size: 16px;
    margin-left: 6px;
  }
`
