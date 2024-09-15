import styled from '@emotion/styled';
import { EllipsisVerticalIcon } from 'assets/svg';
import { preventEvent } from 'utils/Libs/preventEvent';

interface ResponsiveBtnProps {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResponsiveBtn = ({ setModalState }: ResponsiveBtnProps) => {
  return (
    <Button>
      <EllipsisVerticalIcon
        onClick={(e) => {
          preventEvent(e);
          setModalState(true);
        }}
      />
    </Button>
  );
};

export default ResponsiveBtn;

const Button = styled.div`
  display: none;
  @media (max-width: 420px) {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1px;
  }
`;
