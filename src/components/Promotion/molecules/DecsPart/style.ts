import styled from '@emotion/styled';
import { Palette } from 'styles/globals';
import { PromotionStyleProps } from 'types';

export const DecsPartOverlay = styled.div`
  width: 100%;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.4);
  filter: blur(2px);
  backdrop-filter: blur(20px);
  visibility: ${(props: PromotionStyleProps) =>
    props.isShow ? 'visible' : 'hidden'};
  transition: all 1s ease-in;
  z-index: 3;
  transform: ${(props: PromotionStyleProps) =>
    props.isShow ? 'scale(1)' : ''};
`;

export const DecsPartWrapper = styled.div`
  z-index: 3;
  position: absolute;
  top: ${(props: PromotionStyleProps) => (props.isShow ? '0' : '80dvh')};
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props: PromotionStyleProps) => (props.isShow ? '30px' : '60px')};
  opacity: ${(props: PromotionStyleProps) => (props.isShow ? '1' : '0')};
  padding-top: 33dvh;
  justify-content: flex-start;
  color: white;
  transition: all 1.7s ease-out;
`;

export const PomotionTitle = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 36px;

  @media (max-width: 950px) {
    font-size: 25px;
  }
  @media (max-width: 420px) {
    font-size: 20px;
  }
`;

export const GradationTitle = styled.span`
  background: linear-gradient(to right, #a2bcff, #ffd2fb);
  color: transparent;
  background-clip: text;
`;

export const PomotionDesc = styled.div`
  font-weight: 500;
  font-size: 20px;
  display: flex;
  gap: 7px;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  word-break: keep-all;
  letter-spacing: 1px;

  p {
    text-align: center;
  }

  @media (max-width: 950px) {
    font-size: 17px;
  }
  @media (max-width: 420px) {
    font-size: 14px;
  }
`;

export const SignInBtn = styled.div`
  width: 148px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: ${Palette.PRIMARY_P10};
  border-radius: 8px;
  box-shadow: none;
  cursor: pointer;
  font-size: 16px;

  p {
    text-decoration: none;
    color: white;
    font-weight: 600;
  }

  @media (max-width: 950px) {
    width: 80px;
    height: 40px;
    font-size: 14px;
  }
  @media (max-width: 420px) {
    width: 65px;
    height: 30px;
    font-size: 12px;
  }
`;
