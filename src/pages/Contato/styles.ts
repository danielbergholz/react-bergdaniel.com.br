import styled from 'styled-components';

interface FormProps {
  netlify: boolean;
}

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Contact = styled.div`
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

export const Form = styled.form<FormProps>`
  margin-top: 60px;

  h1 {
    margin-bottom: 15px;
  }

  input,
  textarea {
    width: 700px;
    border: 0;
    padding: 10px 15px;
    border-radius: 6px;
    background-color: #5c5c5c;
    font-size: 16px;
    color: #fff;
  }

  input::placeholder,
  textarea::placeholder {
    color: #ababab;
  }

  br + input {
    margin-top: 5px;
  }

  textarea {
    resize: none;
    margin-top: 5px;
    height: 200px;
  }

  button {
    margin: 15px 0;
    font-family: 'Anton', Helvetica, Arial;
    text-transform: uppercase;
    font-size: 20px;
    border: 0;
    border-radius: 6px;
    color: #fff;
    background-color: #bb9878;
    padding: 6px 14px;
  }

  @media (max-width: 950px) {
    input,
    textarea {
      width: 500px;
    }
  }

  @media (max-width: 700px) {
    input,
    textarea {
      width: 288px;
    }
  }
`;
