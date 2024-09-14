import { NoticeOptionButton } from './style';

export interface Props {
  children: string;
  bgColor?: string;
  color: string;
  border?: string;
  borderRadius?: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  isSubmitting?: boolean;
}

const NoticeOptionBtn = ({
  children,
  bgColor,
  color,
  border,
  borderRadius,
  onClick,
  type = 'button',
  isSubmitting,
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
        disabled={isSubmitting}
      >
        {children}
      </NoticeOptionButton>
    </>
  );
};

export default NoticeOptionBtn;
