import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 700px;

  Form {
    margin: 80px 0;
    width: 400px;
    justify-content: center;
    text-align: center;

    h1 {
      font-size: 48px;
      color: #3a3a3a;
      margin-bottom: 24px;
    }

    Input {
      margin-bottom: 16px;
    }
  }
`;
