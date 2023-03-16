import * as S from './infosectionone.style';
import sectionOneImage from '../../images/section1.png';

const InfoSectionOne = () => {
  return (
    <S.Container>
      <S.Wrapper direction={'row'}>
        <S.Right>
          <S.Image src={sectionOneImage} />
        </S.Right>
        <S.Left>
          <S.Title>Subtitle</S.Title>
          <S.Header>header</S.Header>
          <S.Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            expedita ad maxime!{' '}
          </S.Description>
          <S.List>
            <S.ListItem>lorem lorem Lorem</S.ListItem>
            <S.ListItem>lorem lorem Lorem</S.ListItem>
            <S.ListItem>lorem lorem Lorem</S.ListItem>
            <S.ListItem>lorem lorem Lorem</S.ListItem>
            <S.ListItem>lorem lorem Lorem</S.ListItem>
            <S.ListItem>lorem lorem Lorem</S.ListItem>
          </S.List>
        </S.Left>
      </S.Wrapper>
    </S.Container>
  );
};

export default InfoSectionOne;
