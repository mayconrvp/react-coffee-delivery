import {
  CurrencyDollar,
  MapPin,
  Timer,
} from 'phosphor-react';
import { useContext } from 'react';
import {
  FirstContainer,
  SecondContainer,
  MainContainer,
  Title,
  SubTitle,
  CardSuccess,
  IconContainer,
  Block,
  InfoContainer,
} from './styles';

import Ilustration from '../../assets/images/Illustration.svg';
import { CartContext } from '../../contexts/CartContext';

export function Success() {
  const { address, paymentForm } = useContext(CartContext);
  console.log(address);
  return (
    <MainContainer>
      <FirstContainer>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>

        <CardSuccess>
          <div>
            <Block>
              <IconContainer color="purple">
                <MapPin />
              </IconContainer>
              <InfoContainer>
                <p>
                  Entrega em
                  {' '}
                  <span className="bolder">
                    {`${address ? address.street : 'Endereço não definido'}, ${address ? address.number : 's/ nº'}`}
                  </span>
                </p>
                <p>
                  {`${address ? address.neighborhood : 'Bairro não definido'
                  } - ${ address ?
                    address.city : 'Cidade indefinda'
                  }, ${ address ?
                    address.uf : 'UF indefinida'}`}
                </p>
              </InfoContainer>
            </Block>

            <Block>
              <IconContainer color="yellow">
                <Timer />~
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
                <p>
                  <span>Pagamento na entrega</span>
                </p>
                <p className="bolder">{paymentForm}</p>
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
  );
}
