import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import GlobalStyle, * as S from './global.style';
import InfoBox from './components/infobox/infobox';
import { ThemeProvider } from 'styled-components';
import InfoSectionOne from './components/infosectionone/infosectionone';
import InfoSectionTwo from './components/infosectiontwo/infosectiontwo';
import InfoSectionThree from './components/infosectionthree/infosectionthree';
import Teams from './components/team/teams';
import InfoSectionFour from './components/infosectionfour/infosectionfour';
import Blogs from './components/blogs/blogs';
import Footer from './components/footer/footer';
import { useState } from 'react';

const App = () => {
  const { theme, darktheme } = S;
  const [color, setColor] = useState(false);

  return (
    <ThemeProvider theme={color ? darktheme : theme}>
      <GlobalStyle />
      <S.Container>
        <Navbar setColor={setColor} color={color} />
        <Hero />
        <InfoBox />
        <InfoSectionOne />
        <InfoSectionTwo />
        <InfoSectionThree />
        <InfoSectionFour />
        <Teams />
        <Blogs />
        <Footer />
      </S.Container>
    </ThemeProvider>
  );
};

export default App;
