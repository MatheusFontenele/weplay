import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;


  .wrapper{
    display: grid;
    grid-template-columns: 250px 1fr;
    position: relative;

    main{
      padding: 5.5rem 1rem 2rem;
      height: 1000vh;
    }
  }
`
