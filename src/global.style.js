import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

body{
  background-color: ${({ theme }) => theme.colors.bgDefault};
  }
`;
export default GlobalStyle

export const Container = styled.div`
  height: 100vh;
`;


export const theme = {
  colors: {
    primary: "darkBlue",
    secondary: "tomato",
    light: "black",
    text: "snow",
    textDark: "gray",
    bgDefault: "white",
    bgPrimary: "darkBlue",
    bgSecondary: "darkBlue",
    bgLight: "aliceBlue",
    hoverColor: "aliceBlue",
  },
};

export const darktheme = {
  colors: {
    primary: "white",
    secondary: "tomato",
    light: "yellow",
    text: "snow",
    textDark: "gray",
    bgDefault: "black",
    bgPrimary: "black",
    bgSecondary: "black",
    bgLight: "aliceBlue",
    hoverColor: "",
  },
};
