import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  gap: 51.25rem;
  @media (max-width: 1440px) {
    justify-content: space-around;
  }

  @media (max-width: 1140px) {
    /* justify-content: center; */
    gap: 25rem;
  }
  @media (max-width: 768px) {
    gap: 1rem;
  }
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`

export const ButtonLocation = styled.div`
  height: 2.375rem;
  width: 10rem;
  border-radius: 6px;
  background-color: ${props => props.theme['purple-light']};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  color: ${props => props.theme['purple']};
  cursor: pointer;

  &:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  p{
    color: ${props => props.theme['purple-dark']};

    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
`

export const Cart = styled.div`
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 8px;
  background-color: ${props => props.theme['yellow-light']};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme['yellow-dark']};
  cursor: pointer;
  &:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`