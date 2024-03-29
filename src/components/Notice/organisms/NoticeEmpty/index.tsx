import { PaperIcon } from 'assets/svg';
import { Layer } from './style';

const NoticeEmpty = () => {
  return (
    <Layer>
      <PaperIcon />
      <h2>선택된 공지사항이 없습니다..</h2>
      <p>왼쪽 보드에서 선택해 보세요.</p>
    </Layer>
  );
};

export default NoticeEmpty;
