import { Palette } from 'styles/globals';
import { NoticeOptionButton } from './style';

export interface Props {
  children: string;
  bgColor?: string;
  color: string;
  border?: string;
  onClick: () => void;
}

const NoticeOptionBtn = ({
  children,
  bgColor,
  color,
  border,
  onClick,
}: Props) => {
  return (
    <>
      <NoticeOptionButton
        bgColor={bgColor ?? 'transparent'}
        color={color}
        border={border}
        onClick={onClick}
      >
        {children}
      </NoticeOptionButton>
    </>
  );
};

export default NoticeOptionBtn;
