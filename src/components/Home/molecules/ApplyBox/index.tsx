import Link from 'next/link';
import { Palette } from 'styles/globals';
import { applyBoxProps } from 'types';
import * as S from './style';
import { SettingIcon } from 'assets/svg';
import { getRole } from 'utils/Libs/getRole';
import { useEffect, useState } from 'react';

const ApplyBox = ({
  name,
  url,
  count,
  maxCount,
  applyStatus,
  onClick,
  theme,
  setApplyModifyModal,
}: applyBoxProps) => {
  const [role, setRole] = useState('');

  useEffect(() => {
    setRole(getRole());
  }, []);

  return (
    <S.ApplyBoxWrapper style={{ gridArea: name }}>
      <S.ApplyBoardHeader>
        <S.TitleWrapper>
          <div>{name}</div>
          {(role === 'councillor' || role === 'developer') && (
            <div
              onClick={() => {
                setApplyModifyModal(true);
              }}
            >
              <SettingIcon fill={theme === 'light' ? '#292E3D' : '#CDCDD5'} />
            </div>
          )}
        </S.TitleWrapper>
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
                Math.floor(maxCount / 2) >= count
                  ? `${Palette.SUB_GREEN}`
                  : Math.floor(maxCount * (6.5 / 8)) > count
                  ? `${Palette.SUB_YELLOW}`
                  : `${Palette.SUB_RED}`,
            }}
          />
          <S.NotApplyLine
            style={{
              width: `calc(${
                maxCount ? ((maxCount - count) / maxCount) * 100 : 100
              }% - 0.7%)`,
            }}
          />
        </S.CountLine>
      </S.ApplyCountWrapper>
      <S.ApplyBottom>
        {name === '자습신청' ? (
          <p>오후 8시~9시에 자습 신청이 가능해요</p>
        ) : (
          <S.ApplyDesc>
            <p>오후 8시20분~9시에 안마의자 신청이 가능해요</p>
            <p
              style={{ color: `${Palette.PRIMARY_P10}` }}
              className="womanText"
            >
              ※ 여학생의 경우 여자 사감선생님께 별도로 신청해주세요.
            </p>
          </S.ApplyDesc>
        )}
        <S.ApplyBtn onClick={onClick} applyStatus={applyStatus} theme={theme}>
          {applyStatus}
        </S.ApplyBtn>
      </S.ApplyBottom>
    </S.ApplyBoxWrapper>
  );
};
export default ApplyBox;
