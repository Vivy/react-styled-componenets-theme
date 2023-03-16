import * as S from './hero.style';
import heroImage from '../../images/hero.png';

const Hero = () => {
  return (
    <S.Container>
      <S.Left>
        <S.Title>This is going to be something very awsome</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          consectetur qui, commodi nulla ipsum numquam eos quod ullam, nam quae
          iusto molestias provident?
        </S.Description>
        <S.ButtonsContainer>
          <S.Button>About Us</S.Button>
          <S.Button>Contact Us</S.Button>
        </S.ButtonsContainer>
      </S.Left>
      <S.Right>
        <S.Image src={heroImage} />
      </S.Right>
    </S.Container>
  );
};

export default Hero;
