import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const ApplyModifyModalWrapper = styled.div`
	width: 410px;
	height: 250px;
	background: ${Palette.BACKGROUND_CARD};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 10;
	padding: 12px 12px 20px 12px;
	border-radius: 8px;
	box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);

  p{
      padding-left: 10px;
      font-style: normal;
      padding-bottom: 10px;
      font-weight: 600;
      font-size: 14px;
      color: ${Palette.NEUTRAL_N10};
    }

    div{
      width: 100%;
    }

	@media (max-width: 420px) {
		width: 100%;
		border-radius: 16px;
	}
`;

export const BtnWrapper = styled.div`
  height: 45px;
  display: flex;
  justify-content: center;
  gap: 5px;

  button{
    width: 48.6%;
    font-weight: 700;
    font-size: 16px;
    border-radius: 8px;
  }
`;

export const CancelBtn = styled.button`
  color: ${Palette.NEUTRAL_N20};
  background-color: ${Palette.BACKGROUND_CARD};
  border: 1px solid ${Palette.NEUTRAL_N30};
`;

export const CheckBtn = styled.button`
  color: #fff;
  background-color: ${Palette.PRIMARY_P10};
  border: none;
`;


