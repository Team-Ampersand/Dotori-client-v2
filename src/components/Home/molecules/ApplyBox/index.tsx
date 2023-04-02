import Link from 'next/link';
import { Palette } from 'styles/globals';
import { applyBoxProps } from 'types';
import * as S from './style';

const ApplyBox = ({
  name,
  url,
  count,
  maxCount,
  applyStatus,
  onClick,
}: applyBoxProps) => (
  <S.ApplyBoxWrapper style={{ gridArea: name }}>
    <S.ApplyBoardHeader>
      <div>{name}</div>
      <Link href={url}>
        <a>
          <span>전체보기</span> &gt;
        </a>
      </Link>
    </S.ApplyBoardHeader>
    <S.ApplyCountWrapper>
      <p>{`${count}/${maxCount}`}</p>
      <S.CountLine>
        <S.ApplyLine
          style={{
            width: `calc(${(count / maxCount) * 100}% - 0.7%)`,
            background:
              name === '자습신청'
                ? `${Palette.SUB_GREEN}`
                : `${Palette.SUB_RED}`,
          }}
        />
        <S.NotApplyLine
          style={{
            width: `calc(${((maxCount - count) / maxCount) * 100}% - 0.7%)`,
          }}
        />
      </S.CountLine>
    </S.ApplyCountWrapper>
    <S.ApplyBottom>
      {name === '자습신청' ? (
        <p>20:00~21:00 에 자습 신청이 가능해요</p>
      ) : (
        <S.ApplyDesc>
          <p>20:20~21:00 에 안마의자 신청이 가능해요</p>
          <p style={{ color: `${Palette.PRIMARY_P10}` }} className="womanText">
            ※ 여학생의 경우 여자 사감선생님께 별도로 신청해주세요.
          </p>
        </S.ApplyDesc>
      )}
      <S.ApplyBtn onClick={onClick} applyStatus={applyStatus}>
        {applyStatus}
      </S.ApplyBtn>
    </S.ApplyBottom>
  </S.ApplyBoxWrapper>
);

export default ApplyBox;
