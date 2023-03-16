import * as S from '../infosectiontwo/infosectiontwo.style';
import sectionImage4 from '../../images/bg2.jpg';
import * as C from './infosectionfour.style';

const InfoSectionFour = () => {
  return (
    <S.Container sectionImage={sectionImage4} Height={'300px'}>
      <C.Card>
        <C.CardContent>
          <C.Number>100+</C.Number>
          <C.Subtitle>Subscribers</C.Subtitle>
        </C.CardContent>
      </C.Card>
      <C.Card>
        <C.CardContent>
          <C.Number>100+</C.Number>
          <C.Subtitle>Subscribers</C.Subtitle>
        </C.CardContent>
      </C.Card>
      <C.Card>
        <C.CardContent>
          <C.Number>100+</C.Number>
          <C.Subtitle>Subscribers</C.Subtitle>
        </C.CardContent>
      </C.Card>
      <C.Card>
        <C.CardContent>
          <C.Number>100+</C.Number>
          <C.Subtitle>Subscribers</C.Subtitle>
        </C.CardContent>
      </C.Card>
    </S.Container>
  );
};

export default InfoSectionFour;
