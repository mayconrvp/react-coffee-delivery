import {
  Coffee,
  Package,
  ShoppingCart,
  ShoppingCartSimple,
  Timer,
} from 'phosphor-react';
import CoffeeHome from '../../assets/images/coffeeHome.svg';
import {
  ButtonAddCart,
  CardCoffee,
  Circle,
  CoffeeListContainer,
  FooterCardContainer,
  HomeListContainer,
  ImageAndLabelContainer,
  InputDiv,
  IntroContainer,
  IntroFirst,
  IntroListContainer,
  IntroListContainer2,
  IntroSecond,
  IntroTextContainer,
  IntroTextContainer2,
  Label,
  ListContainer,
  NameAndDescriptionContainer,
  PriceDiv,
  ShopDiv,
  Title,
  TitleH2,
} from './styles';

import LessIcon from '../../assets/images/less.svg'
import PlusIcon from '../../assets/images/plus.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const Home = () => {
  const { products, handleAddProductToCart } = useContext(CartContext)
  console.log(products)

  const handlePlusClick = (id: string) => {
    const inputValue = Number(
      (document.getElementById(id + 'Amount') as HTMLInputElement).value,
    )
    if (inputValue < 10) {
      ;(document.getElementById(id + 'Amount') as HTMLInputElement).value =
        String(inputValue + 1)
    }
  }

  const handleLessClick = (id: string) => {
    const inputValue = Number(
      (document.getElementById(id + 'Amount') as HTMLInputElement).value,
    )
    if (inputValue !== 1) {
      ;(document.getElementById(id + 'Amount') as HTMLInputElement).value =
        String(inputValue - 1)
    }
  }

  const notifyItemAlreadyExists = () =>
    toast.info('Este item já foi adicionado ao carrinho')

  const notifyItemAdded = () => toast.success('Item adicionado ao carrinho!')

  return (
    <>
      <IntroContainer>
        <IntroFirst>
          <IntroTextContainer>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </IntroTextContainer>
          <ListContainer>
            <IntroTextContainer2>
              <IntroListContainer>
                <Circle statusColor="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </Circle>
                <p>Compra simples e segura</p>
              </IntroListContainer>
              <IntroListContainer>
                <Circle statusColor="purple">
                  <Timer size={16} weight="fill" />
                </Circle>
                <p>Entrega rápida e rastreada</p>
              </IntroListContainer>
            </IntroTextContainer2>
            <IntroTextContainer2>
              <IntroListContainer2>
                <Circle statusColor="base">
                  <Package size={16} weight="fill" />
                </Circle>
                <p>Embalagem mantém o café intacto</p>
              </IntroListContainer2>

              <IntroListContainer2>
                <Circle statusColor="yellow">
                  <Coffee size={16} weight="fill" />
                </Circle>
                <p>O café chega fresquinho até você</p>
              </IntroListContainer2>
            </IntroTextContainer2>
          </ListContainer>
        </IntroFirst>
        <IntroSecond>
          <img src={CoffeeHome} alt="copo de café" />
        </IntroSecond>
      </IntroContainer>

      <CoffeeListContainer>
        <TitleH2>Nossos cafés</TitleH2>
        <HomeListContainer>
          {products.map((product) => {
            return (
              <CardCoffee key={product.id}>
                <ImageAndLabelContainer>
                  <img src={product.srcImage} alt="" />
                  <div className="labels">
                    {product.type.map((el) => {
                      return (
                        <Label key={el}>
                          <span>{el}</span>
                        </Label>
                      )
                    })}
                  </div>
                </ImageAndLabelContainer>
                <NameAndDescriptionContainer>
                  <span className="name">{product.name}</span>
                  <p>{product.description}</p>
                </NameAndDescriptionContainer>
                <FooterCardContainer>
                  <PriceDiv>
                    <span>R$&nbsp;</span>
                    <span className="price">{product.price.toFixed(2)}</span>
                  </PriceDiv>
                  <ShopDiv>
                    <InputDiv>
                      <img
                        src={LessIcon}
                        alt=""
                        onClick={() => handleLessClick(product.id)}
                      />
                      <input
                        type="number"
                        value={product.quantity}
                        min={1}
                        id={product.id + 'Amount'}
                      />
                      <img
                        src={PlusIcon}
                        alt=""
                        onClick={() => handlePlusClick(product.id)}
                      />
                    </InputDiv>
                    <ButtonAddCart
                      onClick={() =>
                        handleAddProductToCart(product.id)
                          ? notifyItemAdded()
                          : notifyItemAlreadyExists()
                      }
                    >
                      <ShoppingCartSimple size={20} weight="fill" />
                    </ButtonAddCart>
                    <ToastContainer />
                  </ShopDiv>
                </FooterCardContainer>
              </CardCoffee>
            )
          })}
        </HomeListContainer>
      </CoffeeListContainer>
    </>
  )
}
