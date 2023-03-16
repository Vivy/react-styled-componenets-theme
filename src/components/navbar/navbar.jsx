import * as S from './navbar.style';

const Navbar = ({ setColor, color }) => {
  return (
    <S.Container>
      <S.Left>
        <S.Logo>IT Support</S.Logo>
      </S.Left>
      <S.Center>
        <S.Menu>
          <S.MenuItem>Home</S.MenuItem>
          <S.MenuItem>About Us</S.MenuItem>
          <S.MenuItem>Services</S.MenuItem>
          <S.MenuItem>Contact</S.MenuItem>
          <S.MenuItem>Blog</S.MenuItem>
        </S.Menu>
      </S.Center>
      <S.Right>
        <S.Button>I have Cookies</S.Button>
        <S.DarkMode onClick={() => setColor(!color)} />
      </S.Right>
    </S.Container>
  );
};

export default Navbar;
