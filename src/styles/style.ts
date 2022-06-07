import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem 2rem;
    
    .navLogo{
      display: flex;
      align-items: center;

      gap: 1rem;
      button {
        line-height: 0;
        border: 0;
        background: transparent;
        color: white;
        cursor: pointer;
      }
    }

    .navSearch {
      display: flex;
      align-items: center;
      justify-content: center;

      input[type="text"]{

        background: #070A1F;
        border: 0;
        padding-bottom: .5rem;
        padding-left: .5rem;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;

        width: 25rem;
        height: 2.5rem;
        z-index: 10;

        &::placeholder{
          font-size: 1rem;
          font-weight: bold;
        }
      }

      button {
        line-height: 0;
        border: 0;
        cursor: pointer;
        background: #243189;
        color: #FFF;
        height: 2.5rem;
        width: 2.5rem;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }

    .navProfile{
      display: flex;
      align-items: center;
      gap: 1rem;

      button {
        line-height: 0;
        border: 0;
        background: transparent;
        color: #FFF;
      }

      img{
        width: 3rem;
        height: 3rem;

        border-radius: 50%;
      }
    }
  }
`
