import { NoticeOptionButton } from './style';

export interface Props {
  children: string;
  bgColor?: string;
  color: string;
  border?: string;
  borderRadius?: string;
  onClick: () => void;
}

const NoticeOptionBtn = ({
  children,
  bgColor,
  color,
  border,
  borderRadius,
  onClick,
}: Props) => {
  return (
    <>
      <NoticeOptionButton
        bgColor={bgColor ?? 'transparent'}
        color={color}
        border={border}
        borderRadius={borderRadius}
        onClick={onClick}
      >
        {children}
      </NoticeOptionButton>
    </>
  );
};

export default NoticeOptionBtn;
