import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 90%;
  background-color: ${({ theme }) => theme.colors.bgDefault};
  @media only screen and (max-width: 600px) {
    height: 60%;
  }
  @media only screen and (min-width: 600px) {
    height: 50%;
  }
  @media only screen and (min-width: 992px) {
    height: 80%;
  }
`;

export const Left = styled.div`
  width: 60%;
  background-color: ${({ theme }) => theme.colors.bgDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;

export const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 30px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 85%;
    font-size: 30px;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 85%;
  }
`;

export const Description = styled.p`
  width: 70%;
  font-size: 20px;
  margin-bottom: 2%;
  color: ${({ theme }) => theme.colors.textDark};
  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 80%;
    text-align: center;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 70%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 70%;
  }
`;

export const Right = styled.div`
  width: 40%;
  background-color: ${({ theme }) => theme.colors.bgDefault};
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 500px;
  background-color: ${({ theme }) => theme.colors.bgDefault};
  @media only screen and (min-width: 600px) {
    width: 400px;
  }
  @media only screen and (min-width: 992px) {
    width: 500px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;
export const Button = styled.button`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.text};
  margin-left: 5px;
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.bgLight} 50%,
    ${({ theme }) => theme.colors.bgSecondary} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
    &:hover {
    color: ${({ theme }) => theme.colors.bgPrimary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-position: left bottom;
    cursor: pointer;
  }
  //for Mobiles
  @media only screen and (max-width: 600px) {
    padding: 10px 25px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    padding: 10px 30px;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    padding: 15px 30px;
  }
`;
