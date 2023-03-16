import * as S from './infosectiontwo.style';
import sectionImage1 from '../../images/laptopDark.jpg';

const InfoSectionTwo = () => {
  return (
    <S.Container sectionImage={sectionImage1}>
      <S.TextWrapper>
        <S.Title>some title</S.Title>
        <S.Description>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          quibusdam magnam ipsum{' '}
        </S.Description>
        <S.Description>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          quibusdam magnam ipsum reiciendis{' '}
        </S.Description>
      </S.TextWrapper>
    </S.Container>
  );
};

export default InfoSectionTwo;
