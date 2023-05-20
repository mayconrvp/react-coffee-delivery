import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Trash } from "phosphor-react"
import { FirstContainer, SecondContainer, MainContainer, Form, HeadTitle, Card, Input, OrganizerDiv, PaymentButton, OptionsPayment, CardTwo, CoffeeItemContainer, CoffeeItemInfo, InputCount, ButtonRemove, ButtonsDiv, CoffeeActionsDiv, Separator, TotalContainer, ButtonConfirm } from "./styles"
import ImageTest from '../../assets/images/cups/Type=Expresso.svg'
import LessIcon from '../../assets/images/less.svg'
import PlusIcon from '../../assets/images/plus.svg'
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"


export const Checkout = () => {
  const qtdCoffee = ['Trad', 'Capu'];

  return (
    <MainContainer>
      <FirstContainer>
        <h4>Complete seu pedido</h4>
        
          <Card>
            <HeadTitle>
              <MapPinLine className="yellow" size={22}/>
              <div>
                <p className="subtitle">Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </HeadTitle>
            <Form>
              <Input placeholder="CEP" width="200px"/>
              <Input placeholder="Rua" width="560px"/>
              <OrganizerDiv>
                <Input placeholder="Número" width="200px"/>
                <Input placeholder="Complemento (opcional)" width="348px"/>
              </OrganizerDiv>
              <OrganizerDiv>
                <Input placeholder="Bairro" width="200px" />
                <Input placeholder="Cidade" width="276px"/>
                <Input placeholder="UF" width="60px"/>
              </OrganizerDiv>
            </Form>
          </Card>
        
        <Card>
          <HeadTitle>
            <CurrencyDollar className="purple" size={22}/>
            <div>
              <p>Pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </HeadTitle>
          <OptionsPayment>
            <PaymentButton>
              <CreditCard size={16}/>
              <span>CARTÃO DE CRÉDITO</span>
            </PaymentButton>
            <PaymentButton>
              <Bank size={16}/>
              <span>CARTÃO DE DÉBITO</span>
            </PaymentButton>
            <PaymentButton>
              <Money size={16}/>
              <span>DINHEIRO</span>
            </PaymentButton>
          </OptionsPayment>
        </Card>
      </FirstContainer>
      <SecondContainer>
        <h4>Cafés selecionados</h4>
        
        <CardTwo>
          {
            qtdCoffee.map((item) => (
              <>
              <CoffeeItemContainer>
                <CoffeeItemInfo>
                  <img className="coffeeItem" src={ImageTest} alt="" />
                  <CoffeeActionsDiv>
                    <p>Expresso Tradicional</p>
                    <ButtonsDiv>
                      <InputCount>
                        <img src={LessIcon} alt="" />
                        <input type="number" value={1} min={1} name="quantidade" id="quantidade" />
                        <img src={PlusIcon} alt="" />
                      </InputCount>
                      <ButtonRemove><Trash size={16} />Remover</ButtonRemove>
                    </ButtonsDiv>
                  </CoffeeActionsDiv>
                </CoffeeItemInfo>
                <span>R$ 9,90</span>
              </CoffeeItemContainer> 
              <Separator />
              </>
            ))
          }

          <TotalContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </TotalContainer>
          <Link to="/success" style={{ textDecoration: 'none' }}>
            <ButtonConfirm>Confirmar Pedido</ButtonConfirm>
          </Link>
        </CardTwo>
      </SecondContainer>

    </MainContainer>
  )  
}