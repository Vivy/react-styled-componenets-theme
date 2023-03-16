import * as S from './teams.style';
import avatarImage1 from '../../images/staff1.jpg';
import avatarImage2 from '../../images/staff2.jpg';
import avatarImage3 from '../../images/staff3.jpg';
import avatarImage4 from '../../images/staff4.jpg';
import TextBanner from '../textbanner/textbanner';

const Teams = () => {
  return (
    <S.Container>
      <TextBanner title={'whatever'} subtitle={'Our Team'} />
      <S.Wrapper>
        <S.Card>
          <S.CardImage src={avatarImage1} />
          <S.TextWrapper>
            <S.MemberName>name</S.MemberName>
            <S.TeamPosition>Position</S.TeamPosition>
          </S.TextWrapper>
        </S.Card>
        <S.Card>
          <S.CardImage src={avatarImage2} />
          <S.TextWrapper>
            <S.MemberName>name</S.MemberName>
            <S.TeamPosition>Position</S.TeamPosition>
          </S.TextWrapper>
        </S.Card>
        <S.Card>
          <S.CardImage src={avatarImage3} />
          <S.TextWrapper>
            <S.MemberName>name</S.MemberName>
            <S.TeamPosition>Position</S.TeamPosition>
          </S.TextWrapper>
        </S.Card>
        <S.Card>
          <S.CardImage src={avatarImage4} />
          <S.TextWrapper>
            <S.MemberName>name</S.MemberName>
            <S.TeamPosition>Position</S.TeamPosition>
          </S.TextWrapper>
        </S.Card>
      </S.Wrapper>
    </S.Container>
  );
};

export default Teams;
