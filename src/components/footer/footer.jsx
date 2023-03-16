import * as S from './footer.style';

const Footer = () => {
  return (
    <>
      <S.Container>
        <S.Description>
          <S.Title>About Me</S.Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          enim, iste in dicta sit explicabo magni similique placeat hic ipsam
          earum eum facilis ipsa ducimus atque sapiente vitae eos nisi dolor.
        </S.Description>
        <S.MenuItems>
          <S.Title>Our Services</S.Title>
          <S.Menu>
            <S.MenuItem href='#'>Training Courses</S.MenuItem>
            <S.MenuItem href='#'>Service Desk</S.MenuItem>
            <S.MenuItem href='#'>Proactive Services</S.MenuItem>
            <S.MenuItem href='#'>User Support</S.MenuItem>
            <S.MenuItem href='#'>24/7 Services</S.MenuItem>
          </S.Menu>
        </S.MenuItems>
        <S.MenuItems>
          <S.Title>Our Policies</S.Title>
          <S.Menu>
            <S.MenuItem href='#'>Privacy Policy</S.MenuItem>
            <S.MenuItem href='#'>Data Policy</S.MenuItem>
          </S.Menu>
        </S.MenuItems>
      </S.Container>
      <S.CopyRight>&copy; 2023 Vivy - All Rights Reserved.</S.CopyRight>
    </>
  );
};

export default Footer;
