import { Coffee, Package, ShoppingCart, ShoppingCartSimple, Timer, Trash } from 'phosphor-react'
import CoffeeHome from '../../assets/images/coffeeHome.svg'
import { ButtonAddCart, CardCoffee, Circle, CoffeeListContainer, FooterCardContainer, HomeListContainer, ImageAndLabelContainer, InputDiv, IntroContainer, IntroFirst, IntroListContainer, IntroListContainer2, IntroSecond, IntroTextContainer, IntroTextContainer2, Label, ListContainer, NameAndDescriptionContainer, PriceDiv, RodapeCard, ShopDiv, Title, TitleH2 } from './styles'

import ImageTest from '../../assets/images/cups/Type=Expresso.svg'
import LessIcon from '../../assets/images/less.svg'
import PlusIcon from '../../assets/images/plus.svg'

export const Home = () => {

  const handlePlusClick = () => {
    console.log("Lidando com +")
  }
  const handleLessClick = () => {
    console.log("Lidando com -")
  }

  return (
    <>
      <IntroContainer>
        <IntroFirst>
          <IntroTextContainer>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </IntroTextContainer>
          <ListContainer>
            <IntroTextContainer2>
              <IntroListContainer>
                <Circle statusColor='yellowDark'><ShoppingCart size={16} weight="fill" /></Circle>
                <p>Compra simples e segura</p>
              </IntroListContainer>
              <IntroListContainer>
                <Circle statusColor='purple'><Timer size={16} weight="fill" /></Circle>
                <p>Entrega rápida e rastreada</p>
              </IntroListContainer>
              
            </IntroTextContainer2>
            <IntroTextContainer2>
              <IntroListContainer2>
                <Circle statusColor='base'><Package size={16} weight="fill"/></Circle>
                <p>Embalagem mantém o café intacto</p>
              </IntroListContainer2>
              
              <IntroListContainer2>
                <Circle statusColor='yellow'><Coffee size={16} weight="fill"/></Circle>
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
          <CardCoffee>
            <ImageAndLabelContainer >
              <img src={ImageTest} alt="" />
              <Label><span>Tradicional</span></Label>
            </ImageAndLabelContainer>
            <NameAndDescriptionContainer>
              <span className='name'>Expresso Tradicional</span >
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </NameAndDescriptionContainer>
            <FooterCardContainer>
              <PriceDiv>
                <span>R$&nbsp;</span>
                <span className='price'>9,90</span>
              </PriceDiv>
              <ShopDiv>
                <InputDiv>
                  <img src={LessIcon} alt="" onClick={handleLessClick}/>
                  <input type="number" value={1} min={1} name="quantidade" id="quantidade" />
                  <img src={PlusIcon} alt="" onClick={handlePlusClick}/>
                </InputDiv>
                <ButtonAddCart>
                  <ShoppingCartSimple size={20} weight='fill' />
                </ButtonAddCart>
              </ShopDiv>
            </FooterCardContainer>
          </CardCoffee>
          <CardCoffee>
            <ImageAndLabelContainer >
              <img src={ImageTest} alt="" />
              <Label><span>Tradicional</span></Label>
            </ImageAndLabelContainer>
            <NameAndDescriptionContainer>
              <span className='name'>Expresso Tradicional</span >
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </NameAndDescriptionContainer>
            <FooterCardContainer>
              <PriceDiv>
                <span>R$&nbsp;</span>
                <span className='price'>9,90</span>
              </PriceDiv>
              <ShopDiv>
                <InputDiv>
                  <img src={LessIcon} alt="" onClick={handleLessClick}/>
                  <input type="number" value={1} min={1} name="quantidade" id="quantidade" />
                  <img src={PlusIcon} alt="" onClick={handlePlusClick}/>
                </InputDiv>
                <ButtonAddCart>
                  <ShoppingCartSimple size={20} weight='fill' />
                </ButtonAddCart>
              </ShopDiv>
            </FooterCardContainer>
          </CardCoffee>
          <CardCoffee>
            <ImageAndLabelContainer >
              <img src={ImageTest} alt="" />
              <Label><span>Tradicional</span></Label>
            </ImageAndLabelContainer>
            <NameAndDescriptionContainer>
              <span className='name'>Expresso Tradicional</span >
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </NameAndDescriptionContainer>
            <FooterCardContainer>
              <PriceDiv>
                <span>R$&nbsp;</span>
                <span className='price'>9,90</span>
              </PriceDiv>
              <ShopDiv>
                <InputDiv>
                  <img src={LessIcon} alt="" onClick={handleLessClick}/>
                  <input type="number" value={1} min={1} name="quantidade" id="quantidade" />
                  <img src={PlusIcon} alt="" onClick={handlePlusClick}/>
                </InputDiv>
                <ButtonAddCart>
                  <ShoppingCartSimple size={20} weight='fill' />
                </ButtonAddCart>
              </ShopDiv>
            </FooterCardContainer>
          </CardCoffee>
          <CardCoffee>
            <ImageAndLabelContainer >
              <img src={ImageTest} alt="" />
              <Label><span>Tradicional</span></Label>
            </ImageAndLabelContainer>
            <NameAndDescriptionContainer>
              <span className='name'>Expresso Tradicional</span >
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </NameAndDescriptionContainer>
            <FooterCardContainer>
              <PriceDiv>
                <span>R$&nbsp;</span>
                <span className='price'>9,90</span>
              </PriceDiv>
              <ShopDiv>
                <InputDiv>
                  <img src={LessIcon} alt="" onClick={handleLessClick}/>
                  <input type="number" value={1} min={1} name="quantidade" id="quantidade" />
                  <img src={PlusIcon} alt="" onClick={handlePlusClick}/>
                </InputDiv>
                <ButtonAddCart>
                  <ShoppingCartSimple size={20} weight='fill' />
                </ButtonAddCart>
              </ShopDiv>
            </FooterCardContainer>
          </CardCoffee>
          <CardCoffee>
            <ImageAndLabelContainer >
              <img src={ImageTest} alt="" />
              <Label><span>Tradicional</span></Label>
            </ImageAndLabelContainer>
            <NameAndDescriptionContainer>
              <span className='name'>Expresso Tradicional</span >
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </NameAndDescriptionContainer>
            <FooterCardContainer>
              <PriceDiv>
                <span>R$&nbsp;</span>
                <span className='price'>9,90</span>
              </PriceDiv>
              <ShopDiv>
                <InputDiv>
                  <img src={LessIcon} alt="" onClick={handleLessClick}/>
                  <input type="number" value={1} min={1} name="quantidade" id="quantidade" />
                  <img src={PlusIcon} alt="" onClick={handlePlusClick}/>
                </InputDiv>
                <ButtonAddCart>
                  <ShoppingCartSimple size={20} weight='fill' />
                </ButtonAddCart>
              </ShopDiv>
            </FooterCardContainer>
          </CardCoffee>
          <CardCoffee>
            <ImageAndLabelContainer >
              <img src={ImageTest} alt="" />
              <Label><span>Tradicional</span></Label>
            </ImageAndLabelContainer>
            <NameAndDescriptionContainer>
              <span className='name'>Expresso Tradicional</span >
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </NameAndDescriptionContainer>
            <FooterCardContainer>
              <PriceDiv>
                <span>R$&nbsp;</span>
                <span className='price'>9,90</span>
              </PriceDiv>
              <ShopDiv>
                <InputDiv>
                  <img src={LessIcon} alt="" onClick={handleLessClick}/>
                  <input type="number" value={1} min={1} name="quantidade" id="quantidade" />
                  <img src={PlusIcon} alt="" onClick={handlePlusClick}/>
                </InputDiv>
                <ButtonAddCart>
                  <ShoppingCartSimple size={20} weight='fill' />
                </ButtonAddCart>
              </ShopDiv>
            </FooterCardContainer>
          </CardCoffee>
          <CardCoffee>
            <ImageAndLabelContainer >
              <img src={ImageTest} alt="" />
              <Label><span>Tradicional</span></Label>
            </ImageAndLabelContainer>
            <NameAndDescriptionContainer>
              <span className='name'>Expresso Tradicional</span >
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </NameAndDescriptionContainer>
            <FooterCardContainer>
              <PriceDiv>
                <span>R$&nbsp;</span>
                <span className='price'>9,90</span>
              </PriceDiv>
              <ShopDiv>
                <InputDiv>
                  <img src={LessIcon} alt="" onClick={handleLessClick}/>
                  <input type="number" value={1} min={1} name="quantidade" id="quantidade" />
                  <img src={PlusIcon} alt="" onClick={handlePlusClick}/>
                </InputDiv>
                <ButtonAddCart>
                  <ShoppingCartSimple size={20} weight='fill' />
                </ButtonAddCart>
              </ShopDiv>
            </FooterCardContainer>
          </CardCoffee>
          <CardCoffee>
            <ImageAndLabelContainer >
              <img src={ImageTest} alt="" />
              <Label><span>Tradicional</span></Label>
            </ImageAndLabelContainer>
            <NameAndDescriptionContainer>
              <span className='name'>Expresso Tradicional</span >
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </NameAndDescriptionContainer>
            <FooterCardContainer>
              <PriceDiv>
                <span>R$&nbsp;</span>
                <span className='price'>9,90</span>
              </PriceDiv>
              <ShopDiv>
                <InputDiv>
                  <img src={LessIcon} alt="" onClick={handleLessClick}/>
                  <input type="number" value={1} min={1} name="quantidade" id="quantidade" />
                  <img src={PlusIcon} alt="" onClick={handlePlusClick}/>
                </InputDiv>
                <ButtonAddCart>
                  <ShoppingCartSimple size={20} weight='fill' />
                </ButtonAddCart>
              </ShopDiv>
            </FooterCardContainer>
          </CardCoffee>
        </HomeListContainer>
      </CoffeeListContainer>
    </>

    
  )
}