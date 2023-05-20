import styled from 'styled-components'

import { InputDiv } from '../Home/styles'
import { ButtonLocation } from '../../components/Header/styles'

export const MainContainer = styled.div`
  padding: 2rem 10rem;
  display: flex;
  gap: 2rem;
  h4{
    font-family: 'Baloo 2', cursive;
    font-size: 18px;
    line-height: 23.4px;
    font-weight: 800;
  }
`

export const FirstContainer = styled.div`

  width: 40rem;
  height: 39.3125rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
`
export const SecondContainer = styled(FirstContainer)`
  width: 28rem;
  height: 33.5rem;
`

export const Card = styled.div`
  padding: 2.5rem;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px;
`

export const CardTwo = styled(Card)`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  flex-wrap: wrap;
`
export const Input = styled.input`
  height: 2.625rem;
  background-color: ${props => props.theme['base-input']};
  padding: 0.75rem; 
  border-radius: 4px;
  border: 1px solid #E6E5E5;
  width: ${props => props.width ? props.width : 'auto'};

  &::placeholder{
    font-size: 0.875rem;
    color: ${props => props.theme['base-label']};
  }
`

export const OptionsPayment = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.75rem;
`

export const PaymentButton = styled.button`
  background-color: ${props => props.theme['base-button']};
  border-radius: 6px;
  width: 11.166875rem;
  height: 3.1875rem ;
  border: none;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  color: ${props => props.theme['purple']};

  span{
    padding-left: 0.75rem;
    color: ${props => props.theme['base-text']};
  }
  img{
    color: red;
  }
  &:hover{
    background-color: ${props => props.theme['base-hover']};
  }
`

export const OrganizerDiv = styled.div`
display: flex;
gap: 12px;

`

export const HeadTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${props => props.theme['base-text']};
  margin-bottom: 2rem;
  span{
    font-size: 14px;
  }
  .subtitle{
    color: ${props => props.theme['base-subtitle']};
  }
  .yellow{
    color: ${props => props.theme['yellow']};
  }
  .purple{
    color: ${props => props.theme['purple']};
  }
`

export const CoffeeItemContainer = styled.div`
  display: flex;
  width: 23rem;
  height: 5rem;
  justify-content: space-between;
  
  /* align-items: center; */
  padding: 0.5rem 0.25rem ;
  span{
    font-weight: 800;
  }
`


export const CoffeeItemInfo = styled.div`
  display: flex;
  img.coffeeItem{
    height: 4rem;
    width: 4rem;
  }
`

export const CoffeeActionsDiv = styled.div`
  margin-left: 20px;
  p{
    margin-bottom: 0.5rem;
  }
`



export const ButtonsDiv = styled.div`
  display: flex;
  gap: 8px;
`

export const InputCount = styled(InputDiv)`
  width: 4.5rem;
  height: 2rem;
`

export const ButtonRemove = styled(InputDiv)`
  text-transform: uppercase;
  width: 5.6875rem;
  height: 2rem;
  font-size: 0.75rem;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: ${props => props.theme['base-text']};

  svg{
    color: ${props => props.theme['purple']};
  }
`

export const Separator = styled.div`
  margin: 1.5rem 0;
  border-bottom: 1px solid ${props => props.theme['base-hover']};
  width: 100%;
`

export const TotalContainer = styled.div`
  width: 368px;
  /* height: 92px; */
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  div {
    display: flex;
    justify-content: space-between;
    span{
      font-size: 0.875rem;
    }
  }
  .total{
    font-weight: 800;
    span{
      font-size: 1.25rem;
    }
  }
`

export const ButtonConfirm = styled.button`
  background-color: ${props => props.theme['yellow']};
  color: ${props => props.theme['white']};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 800;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: none;
  border-radius: 6px;
  width: 23rem;
  height: 2.875rem;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.theme['yellow-dark']};
  }
`