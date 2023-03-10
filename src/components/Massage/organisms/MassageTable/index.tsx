import * as S from './style';
import MassageList from 'components/Massage/molecules/MassageList';
import NullApplicstionItem from 'components/Common/molecules/NullApplicationItem';

const MassageTable = () => {
  return (
    <S.TableWrapper>
      <S.ResponseHeader>안마의자</S.ResponseHeader>
      {true ? (
        <S.ListWrapper>
          <MassageList />
        </S.ListWrapper>
      ) : (
        <NullApplicstionItem type={'massage'} />
      )}
    </S.TableWrapper>
  );
};

export default MassageTable;
