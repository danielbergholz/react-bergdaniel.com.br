import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  place-content: center;
  margin-top: 60px;

  a {
    margin-top: 6px;
    display: flex;
    align-items: center;
    color: #fff;
  }

  p {
    margin-left: 8px;
    font-size: 24px;
  }

  img {
    margin-right: 40px;
  }

  @media (max-width: 700px) {
    img {
      display: none;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;

  @media (max-width: 700px) {
    p {
      font-size: 20px;
    }
  }
`;

export const CopyToClipBoard = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;
