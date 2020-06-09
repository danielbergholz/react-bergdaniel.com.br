import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;
  white-space: pre-line;
  display: flex;

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const FlexboxLeft = styled.div`
  width: 1280px;

  > p {
    margin-top: 40px;
    margin-bottom: 25px;
  }

  p {
    font-family: 'Anton', Helvetica, serif;
    font-size: 32px;
    text-transform: uppercase;
  }

  iframe {
    width: inherit;
    height: 720px;
  }

  > span {
    display: block;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 1880px) {
    width: 1152px;

    iframe {
      height: 648px;
    }
  }

  @media (max-width: 1720px) {
    width: 1024px;

    iframe {
      height: 576px;
    }
  }

  @media (max-width: 1550px) {
    width: 896px;

    iframe {
      height: 504px;
    }

    > span {
      font-size: 18px;
    }
  }

  @media (max-width: 1395px) {
    width: 768px;

    iframe {
      height: 432px;
    }
  }

  @media (max-width: 1220px) {
    width: 640px;

    iframe {
      height: 360px;
    }

    > span {
      font-size: 16px;
    }
  }
`;

export const FlexboxRight = styled.div`
  margin-left: 15px;
  margin-top: 140px;
  width: 100%;
`;

export const NextVideoTitle = styled.div`
  background-color: #272727;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px 0 10px 10px;

  strong {
    color: #fff;
    font-size: 18px;
  }

  @media (max-width: 1395px) {
    strong {
      font-size: 16px;
    }
  }
`;

export const NextVideos = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 679px;
  text-align: center;
  background-color: #333;

  img {
    border-radius: 5px;
    margin-top: 5px;
    height: 90px;
    width: 160px;
  }

  span {
    margin-bottom: 5px;
    color: #fff;
    display: block;
  }

  @media (max-width: 1880px) {
    height: 607px;
  }

  @media (max-width: 1720px) {
    height: 535px;
  }

  @media (max-width: 1550px) {
    height: 464px;
  }

  @media (max-width: 1395px) {
    height: 394px;
  }

  @media (max-width: 1220px) {
    height: 321px;
  }
`;

export const Video = styled.div`
  cursor: pointer;
`;

export const UpperTitle = styled.div`
  height: 28px;
  display: flex;
  justify-content: space-between;
  width: inherit;

  strong {
    font-size: 20px;
  }

  @media (max-width: 1395px) {
    strong {
      font-size: 18px;
    }
  }
`;

export const Download = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > span {
    font-size: 18px;
  }

  @media (max-width: 1395px) {
    > span {
      font-size: 16px;
    }
  }
`;
