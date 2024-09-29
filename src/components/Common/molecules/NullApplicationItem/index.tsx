import * as S from './style';

interface Props {
  message: string;
  subMessage: string;
  Icon: () => JSX.Element;
}

const NullApplicstionItem = ({ Icon, message, subMessage }: Props) => {
  return (
    <S.NullApplicstionWrapper>
      <Icon />
      <span>{message}</span>
      <p>{subMessage}</p>
    </S.NullApplicstionWrapper>
  );
};

export default NullApplicstionItem;
