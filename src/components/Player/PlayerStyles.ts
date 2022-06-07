import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;


  .avatarIcon{
    position: relative;
    display: flex;
    align-items: center;
    .avatar{
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
    }
    .indicator{
      position: absolute;
      top: 100%;
      left: 100%;
      transform: translate(-10px, -10px);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #303030;
      overflow: hidden;
      display: grid;
      place-items: center;

      .status {
        width: 7px;
        height: 7px;
        border-radius: inherit;
      }
      .online{
          background: #43b581;
      }
      .offline{
        background: #747f8d;
        &::after{
          background: #303030;
          width: 4px;
          height: 4px;
          border-radius: inherit;
        }
      }
    }

    
  }
  .profile{
    display: flex;
    flex-direction: column;

    span{
      font-size: 1rem;

      :last-child{
        font-size: .8rem;
        color: #00ff00;
      }
    }
  }
`;
