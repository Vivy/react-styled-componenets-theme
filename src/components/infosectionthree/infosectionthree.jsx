import * as S from '../infosectionone/infosectionone.style';
import sectionThreeImage from '../../images/section3.png';

const InfoSectionThree = () => {
  return (
    <S.Container>
      <S.Wrapper direction={'row-reverse'}>
        <S.Right>
          <S.Image src={sectionThreeImage} />
        </S.Right>
        <S.Left>
          <S.Title>Subtitle</S.Title>
          <S.Header>header</S.Header>
          <S.Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            expedita ad maxime!{' '}
          </S.Description>
          <S.List>
            <S.ListItem>lorem lorem</S.ListItem>
            <S.ListItem>lorem lorem</S.ListItem>
            <S.ListItem>lorem lorem</S.ListItem>
            <S.ListItem>lorem lorem</S.ListItem>
            <S.ListItem>lorem lorem</S.ListItem>
            <S.ListItem>lorem lorem</S.ListItem>
          </S.List>
        </S.Left>
      </S.Wrapper>
    </S.Container>
  );
};

export default InfoSectionThree;
