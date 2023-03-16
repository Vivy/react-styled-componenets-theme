import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bgDefault};
`

export const Title = styled.div`
  color: tomato;
`

export const Subtitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin: 5px;
  color: ${({ theme }) => theme.colors.primary};
`
