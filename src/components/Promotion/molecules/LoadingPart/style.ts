import styled from '@emotion/styled';

export const LoadingPartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10vh;
  background: #16182f;
  p {
    font-weight: 500;
    font-size: 16px;
    color: white;
    margin-bottom: 20px;
  }
  .lottieClass {
    width: 300px;
    position: absolute;
    top: 42%;
  }

  @media (max-width: 950px) {
    svg {
      width: 400px;
    }
    p {
      font-size: 14px;
      margin-bottom: 5px;
    }
    .lottieClass {
      width: 250px;
    }
  }
  @media (max-width: 420px) {
    svg {
      width: 300px;
    }
    p {
      font-size: 13px;
      margin-bottom: 0px;
    }
    .lottieClass {
      width: 210px;
    }
  }
`;
