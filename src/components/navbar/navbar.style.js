import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${({ theme }) => theme.colors.bgDefault};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 8%;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 5%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 10%;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
`;
export const Center = styled.div`
  display: flex;
  flex:2;
    //for Mobiles
    @media only screen and (max-width: 600px) {
    display: none;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    display: flex;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;
export const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.h1`
  font-size: 20px;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;
export const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${({ theme }) => theme.colors.textDark};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (min-width: 600px) {
    font-size: 15px;
    margin-right: 15px;
  }
  @media only screen and (min-width: 992px) {
    margin-right: 30px;
    font-size: 20px;
  }
`;

export const Button = styled.button`
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border: 2px solid ${({ theme }) => theme.colors.text};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgLight};
    color: ${({ theme }) => theme.colors.bgPrimary};
    border: 2px solid darkblue;
  }
  @media only screen and (min-width: 600px) {
    padding: 8px 15px;
  }
  @media only screen and (min-width: 992px) {
    padding: 10px 20px;
  }
`;

export const DarkMode = styled.div`
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  background-color: ${({ theme }) => theme.colors.light};
  height: 30px;
  width: 30px;
  border-radius: 100%;
  cursor: pointer;
`;
