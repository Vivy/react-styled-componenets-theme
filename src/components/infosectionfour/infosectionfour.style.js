import styled from 'styled-components';

export const Card = styled.div`
  width: 250px;
`
export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Number = styled.div`
  font-weight: bold;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.text};
`
export const Subtitle = styled.div`
  font-weight: bold;
  font-style: 20px;
  color: white;
`
