import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h1 {
    font-size: 48px;
    color: #3a3a3a;
  }

  a {
    width: 200px;
    height: 50px;
    background: #6b8df2;
    display: inline-block;
    border: 0;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
    text-align: center;
    padding: 15px 0;
  }
`;

export const Form = styled.form`
  max-width: 600px;

  display: flex;
`;

export const Clients = styled.div`
  margin-top: 40px;

  div {
    justify-content: space-between;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;

    & + div {
      margin-top: 16px;
    }

    .content {
      display: block;

      strong {
        font-size: 14px;
        color: #999;
      }

      p {
        font-size: 16px;
        max-width: 600px;
        color: #3e3e4d;
      }
    }

    button {
      width: 40px;
      height: 40px;
      background: #ff5f60;
      display: inline-block;
      border: 0;
      border-radius: 4px;
      color: #fff;
      text-align: center;
    }
  }
`;
