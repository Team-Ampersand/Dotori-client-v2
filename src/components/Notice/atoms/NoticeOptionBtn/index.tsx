import { NoticeOptionButton } from './style';

export interface Props {
  children: string;
  bgColor?: string;
  color: string;
  border?: string;
  borderRadius?: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const NoticeOptionBtn = ({
  children,
  bgColor,
  color,
  border,
  borderRadius,
  onClick,
  type = 'button',
}: Props) => {
  return (
    <>
      <NoticeOptionButton
        type={type}
        bgColor={bgColor ?? 'transparent'}
        color={color}
        border={border}
        borderRadius={borderRadius}
        onClick={() => onClick()}
      >
        {children}
      </NoticeOptionButton>
    </>
  );
};

export default NoticeOptionBtn;
