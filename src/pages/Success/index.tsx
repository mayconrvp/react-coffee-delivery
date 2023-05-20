import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Trash, MapPin, Timer } from "phosphor-react"
import { FirstContainer, SecondContainer, MainContainer, Title, SubTitle, CardSuccess, IconContainer, Block, InfoContainer } from "./styles"


import Ilustration from '../../assets/images/Illustration.svg'


export const Success = () => {
  const qtdCoffee = ['Trad', 'Capu'];

  return (
    <MainContainer>
      <FirstContainer>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
        
          <CardSuccess>
            <div>
              <Block>
                <IconContainer color="purple">
                  <MapPin />
                </IconContainer>
                <InfoContainer>
                  <p>Entrega em <span className="bolder">Rua João Daniel Martinelli, 102</span></p>
                  <p>Farrapos - Porto Alegre, RS</p>
                </InfoContainer>
              </Block>

              <Block>
                <IconContainer color="yellow">
                  <Timer />
                </IconContainer>
                <InfoContainer>
                  <p>Previsão de entrega</p>
                  <p className="bolder">20 min - 30 min</p>
                </InfoContainer>
              </Block>

              <Block>
                <IconContainer color="yellow-dark">
                  <CurrencyDollar />
                </IconContainer>
                <InfoContainer>
                  <p>Entrega em <span className="bolder">Pagamento na entrega</span></p>
                  <p className="bolder">Cartão de Crédito</p>
                </InfoContainer>
              </Block>
            </div>
          
          </CardSuccess>
        
        
      </FirstContainer>
      <SecondContainer>
        
        <div>
          <img src={Ilustration} alt="Ilustração de motoboy em entrega" />
        </div>
      </SecondContainer>

    </MainContainer>
  )  
}