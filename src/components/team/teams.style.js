import styled from 'styled-components';

export const Container = styled.div`
  padding: 5%;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  height: 350px;
  width: 280px;
  display: flex;
  margin: 1%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
`;

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MemberName = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: 2% 2%;
`;

export const TeamPosition = styled.div`
  color: ${({ theme }) => theme.colors.textDark};
`;
