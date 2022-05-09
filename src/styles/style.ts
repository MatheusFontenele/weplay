import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .cardNav {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: 12px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .center {
    .slick-prev {
      display: none !important;
    }

    .slick-next {
      display: none !important;
    }
  }

  .modePlayContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5vh 0;
    width: 100%;

    .modePlay {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      max-width: 1820px;

      margin: 0 20px;

      background-image: url('./images/lol-slider.png');
      border-radius: 12px;

      img {
        width: 200px;
        height: 200px;
      }
      .mode {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 30px;
        width: 33.3%;
        height: 25rem;

        background: rgba(0, 0, 0, 0.75);

        flex-direction: column;

        .playButton {
          width: 120px;
          height: 50px;

          margin-top: 12px;

          color: #fff;
          font-size: 18px;
          font-weight: bold;

          border: 0;
          border-radius: 8px;

          background: linear-gradient(
            90deg,
            rgba(181, 212, 0, 1) 0%,
            rgba(194, 209, 0, 1) 70%
          );
        }
      }
      .solo {
        border-left: 1px solid #383b3e;
        border-right: 1px solid #383b3e;
      }
    }
  }

  .social {
    margin: 5vh auto;

    padding: 12px;

    width: 100%;
    max-width: 1820px;

    border-radius: 12px;
    background-color: #1a2127;

    .friendsArea {
      width: 100%;
      height: 300px;

      font-size: 16px;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100px;
        height: 100px;

        border-radius: 100%;

        margin-bottom: 12px;
      }
    }
  }
`
