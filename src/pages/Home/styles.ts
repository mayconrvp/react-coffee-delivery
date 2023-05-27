// import { StartCountdownButton } from './styles';
import styled from 'styled-components'
import background from '../../assets/images/Background.svg'

export const IntroContainer = styled.div`
  height: 34rem;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* e agora a regra de ouro que fará a imagem ocupar todo o viewport */
  background-size: 100% 100%;
  display: flex;
  padding: 2rem 10rem;

  @media (max-width: 1440px) {
    justify-content: center;
  }
  @media (max-width: 962px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 38rem;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ListContainer = styled.div`
  display: flex;
  width: 35.4375rem;
  /* flex: 1; */
  @media (max-width: 962px) {
    flex-direction: column;
    /* background-color: red; */
    width: 22rem;
  }
`

export const IntroFirst = styled.div`
  /* display: flex; */
  flex-direction: column;
  width: 60vw;
  @media (max-width: 962px) {
    margin-top: -6rem;
  }
`

export const IntroSecond = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;

  @media (max-width: 1440px) {
    justify-content: center;
    img {
      height: 18rem;
    }
  }
  @media (max-width: 960px) {
    img {
      height: 12rem;
    }
  }
`

export const IntroTextContainer = styled.div`
  padding-top: 5.875rem;
  p {
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
  @media (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
  }
`

export const IntroTextContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* width: 40%; */
  height: 5.25rem;
  justify-content: center;
  gap: 1.1rem;
  margin-top: 4.125rem;

  &:not(:first-child) {
    margin-left: 2.5rem;
  }
  @media (max-width: 960px) {
    margin-top: 1rem;
    &:not(:first-child) {
      margin-left: 0px;
      margin-top: 1rem;
    }
  }
`
export const IntroListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  /* width: 14.4375rem; */
  p {
    font-size: 0.8rem;
  }
`

export const IntroListContainer2 = styled(IntroListContainer)`
  width: 18.375rem;
`

const STATUS_COLORS = {
  yellowDark: 'yellow-dark',
  base: 'base-text',
  purple: 'purple',
  yellow: 'yellow',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Circle = styled.div<StatusProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 2rem;
  height: 2rem;
  color: white;
  background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  border-radius: 1000px;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: bold;
  font-size: 3rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const TitleH2 = styled(Title)`
  font-size: 2rem;
`

export const CoffeeListContainer = styled.div`
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 54px;

  @media (max-width: 962px) {
    justify-content: center;
    align-items: center;

    padding: 0;
  }
`

export const HomeListContainer = styled.div`
  display: flex;
  /* margin: 2rem auto; */
  /* padding: 0 0 0 2.4rem; */
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-self: flex-start;
  margin: 0 auto;
  line-height: 130%;
`

export const CardCoffee = styled.div`
  height: 19.375rem;
  width: 16rem;
  background-color: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
`

export const PriceDiv = styled.div`
  display: flex;
  font-family: 'Roboto';
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  .price {
    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
  }
`

export const ShopDiv = styled.div`
  display: flex;
  font-family: 'Roboto';
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  gap: 8px;
`
export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 4.5rem;
  height: 2.375rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  input {
    height: 21px;
    width: 20px;
    border: none;
    text-align: center;
    background-color: transparent;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  img:hover {
    cursor: pointer;
  }
`

export const ButtonAddCart = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  color: #fff;
  text-align: center;
  border: none;
  cursor: pointer;
`

export const ImageAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;

  div.labels {
    display: flex;
    gap: 4px;
  }
`
export const Label = styled.div`
  span {
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
    color: ${(props) => props.theme['yellow-dark']};
  }
  margin-top: 12px;
  background-color: ${(props) => props.theme['yellow-light']};
  width: 5.0625rem;
  height: 1.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`

export const FooterCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 23px;
`

export const NameAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .name {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin-top: -1rem;
  }
  p {
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`
