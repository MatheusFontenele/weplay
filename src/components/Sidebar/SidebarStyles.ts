import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  position: sticky;
  
  width: 250px;
  height: 92vh;
  top: 4.8rem;
  padding: 1rem 0;

  gap: 1rem;

  background: #0E1647;

  button{
    margin: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .25rem;

    padding: .75rem 2rem;
    background: #E51C44;
    border: 0;
    border-radius: 8px;
    
    height: 52px;
    
    font-size: 1.2rem;
    color: #FFF; 
    font-weight: bold;

  }

  .menu{
    display: flex;
    flex-direction: column;
    gap: .25rem;
    list-style: none;

    padding: 1rem 0;

    border-top: 1px solid #323238;

    li {
      a{
        display: flex;
        align-items: center;
        gap: .75rem;
        padding: .5rem 1rem;
        transition: background-color .2s;
        span{
          font-size: 1rem;
        }
      }
      &:hover{
        background: linear-gradient(90deg, rgba(3,11,65,1) 78%, rgba(34,13,65,1) 87%, rgba(64,15,65,1) 90%, rgba(229,28,68,1) 100%);
        border-right: 2px solid #E51C44;
      }
    }
  }
  
  .activeFriends{
    border-top: 1px solid #323238;
    padding: 0 .5rem;
    height: 100%;
      > span{
      display: flex;
      align-items: center;
      gap: .25rem;
      margin: 15px 0;
      font-size: .875rem;
      color: #8d8d99;
    }
    .online{
      display: flex;
      flex-direction: column;
      gap: .5rem;

      .friends{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        cursor: pointer;
        border-radius: 8px;
        padding: 5px 8px;

        &:hover{
          background: #030B41;
        }
      }

    }
  }

  footer{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
    
    ul {

      list-style: none;
      padding: 1rem 0;
      border-top: 1px solid #323238;
      gap: .05rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      li {
        a{
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: .75rem;
          padding: .5rem ;
          font-size: .75rem;
          transition: background-color .2s;
          &:hover{
            background: #030B41;
          }
        }
      }
    }
    span{
      text-align: center;
      color: #8d8d99;
      margin-top: 1rem;
      font-size: .875rem;
    }
  }
`;
