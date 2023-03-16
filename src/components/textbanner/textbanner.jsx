import * as S from './textbanner.style';

const TextBanner = ({ title, subtitle }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
};

export default TextBanner;
