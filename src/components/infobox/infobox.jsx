import {
  Card,
  CardContent,
  Button,
  CardTitle,
  Description,
} from '../styles/card.styles';
import TextBanner from '../textbanner/textbanner';
import * as S from './infobox.style';

const InfoBox = () => {
  return (
    <>
      <TextBanner title='What we provide' subtitle='Our Services' />
      <S.Container>
        <Card>
          <CardContent padding={'10px'}>
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, a? Obcaecati, officiis eaque dicta voluptatibus nam
              eligendi vero architecto! Quos, quod similique?
            </Description>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'10px'}>
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, a? Obcaecati, officiis eaque dicta voluptatibus nam
              eligendi vero architecto! Quos, quod similique?
            </Description>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'10px'}>
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, a? Obcaecati, officiis eaque dicta voluptatibus nam
              eligendi vero architecto! Quos, quod similique?
            </Description>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'10px'}>
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, a? Obcaecati, officiis eaque dicta voluptatibus nam
              eligendi vero architecto! Quos, quod similique?
            </Description>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'10px'}>
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, a? Obcaecati, officiis eaque dicta voluptatibus nam
              eligendi vero architecto! Quos, quod similique?
            </Description>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'10px'}>
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, a? Obcaecati, officiis eaque dicta voluptatibus nam
              eligendi vero architecto! Quos, quod similique?
            </Description>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'10px'}>
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, a? Obcaecati, officiis eaque dicta voluptatibus nam
              eligendi vero architecto! Quos, quod similique?
            </Description>
            <Button>Read More..</Button>
          </CardContent>
        </Card>
      </S.Container>
    </>
  );
};

export default InfoBox;
