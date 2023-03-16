import {
  Button,
  Card,
  CardContent,
  CardImage,
  CardTitle,
  Description,
} from '../styles/card.styles';
import * as S from './blogs.style';
import cardImage1 from '../../images/card1.jpg';
import cardImage2 from '../../images/card2.jpg';
import cardImage3 from '../../images/card3.png';
import TextBanner from '../textbanner/textbanner';

const Blogs = () => {
  return (
    <>
      <TextBanner title={'Our Blogs'} subtitle={'Recent News'} />
      <S.Container>
        <Card>
          <CardContent padding={'1px'}>
            <CardImage src={cardImage1} />
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              odit nostrum, deserunt incidunt ex accusamus, atque esse, aliquam
              repellendus deleniti porro vel?
            </Description>
            <Button>Read More</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'1px'}>
            <CardImage src={cardImage2} />
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              odit nostrum, deserunt incidunt ex accusamus, atque esse, aliquam
              repellendus deleniti porro vel?
            </Description>
            <Button>Read More</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'1px'}>
            <CardImage src={cardImage3} />
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              odit nostrum, deserunt incidunt ex accusamus, atque esse, aliquam
              repellendus deleniti porro vel?
            </Description>
            <Button>Read More</Button>
          </CardContent>
        </Card>
      </S.Container>
    </>
  );
};

export default Blogs;
