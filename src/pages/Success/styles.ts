import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 2rem 10rem;
  display: flex;
  gap: 2rem;
  h4 {
    font-family: 'Baloo 2', cursive;
    font-size: 18px;
    line-height: 23.4px;
    font-weight: 800;
  }
`;

export const FirstContainer = styled.div`
  width: 40rem;
  height: 39.3125rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const SecondContainer = styled(FirstContainer)`
  width: 30.75rem;
  height: 18.3125rem;
  margin-top: 7.5rem;
`;

export const CardSuccess = styled.div`
  padding: 2.5rem;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  background: linear-gradient(
        ${(props) => props.theme['white-back']},
        ${(props) => props.theme['white-back']}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border: 2px solid transparent;
`;
export const Title = styled.h2`
  font-size: 2rem;
  font-family: 'Baloo 2', cursive;
`;
export const SubTitle = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-text']};
  margin-bottom: 2.5rem;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 99px;
  background-color: ${(props) => props.theme[props.color] || '#000000'};
  svg {
    color: ${(props) => props.theme.white};
  }
`;

export const Block = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  .bolder {
    font-weight: 800;
  }
  gap: 0.75rem;
`;

export const InfoContainer = styled.div``;
