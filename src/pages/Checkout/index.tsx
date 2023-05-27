import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from 'phosphor-react'
import {
  FirstContainer,
  SecondContainer,
  MainContainer,
  Form,
  HeadTitle,
  Card,
  Input,
  OrganizerDiv,
  PaymentButton,
  OptionsPayment,
  CardTwo,
  CoffeeItemContainer,
  CoffeeItemInfo,
  InputCount,
  ButtonRemove,
  ButtonsDiv,
  CoffeeActionsDiv,
  Separator,
  TotalContainer,
  ButtonConfirm,
  SubmitButton,
} from './styles'

import LessIcon from '../../assets/images/less.svg'
import PlusIcon from '../../assets/images/plus.svg'

import { useNavigate } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { ToastContainer, toast } from 'react-toastify'

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

const newAddressFormValidationSchema = zod.object({
  postalCode: zod.string().min(8, 'Informe o CEP corretamente'),
  street: zod.string().min(3, 'Informe a Rua'),
  neighborhood: zod.string().min(3, 'Informe o Bairro'),
  city: zod.string().min(3, 'Informe a Rua'),
  uf: zod.string().min(2, 'Informe a UF'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().optional(),
})

export const Checkout = () => {
  enum PaymentFormTypes {
    CREDIT_CARD = 'Cartão de Crédito',
    DEBIT_CARD = 'Cartão de Débito',
    MONEY = 'Dinheiro',
  }

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      postalCode: '',
      street: '',
      neighborhood: '',
      city: '',
      uf: '',
      number: '',
    },
  })

  const {
    productsToAddCart,
    getNameOfProductById,
    getPriceOfProductById,
    getImageOfProductById,
    removeFromCart,
    getValueTotal,
    updateCart,
    setAddress,
    setPaymentForm,
    paymentForm,
    address,
  } = useContext(CartContext)

  const formatCoin = (value: number, aditional = 0) => {
    return (value + aditional).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  function handleCreateAddress(data: NewAddressFormData) {
    console.log(data)
    setAddress(data)
    toast.success('Endereço salvo com sucesso')
  }

  const handlePlusClick = (id: string) => {
    const inputValue = Number(
      (document.getElementById(id + 'Amount') as HTMLInputElement).value,
    )
    if (inputValue < 10) {
      const quantity = ((
        document.getElementById(id + 'Amount') as HTMLInputElement
      ).value = String(inputValue + 1))
      updateCart(id, Number(quantity))
    }
  }

  const handleLessClick = (id: string) => {
    const inputValue = Number(
      (document.getElementById(id + 'Amount') as HTMLInputElement).value,
    )
    if (inputValue !== 1) {
      const quantity = ((
        document.getElementById(id + 'Amount') as HTMLInputElement
      ).value = String(inputValue - 1))
      updateCart(id, Number(quantity))
    }
  }

  const handleConfirmOrder = () => {
    console.log(Object.keys(errors).length)
    console.log(address)
    if (!address || Object.keys(errors).length != 0) {
      toast.info('Preencha o endereço corretamente')
      return
    }
    if (paymentForm == '') {
      toast.info('Necessário selecionar a forma de pagamento')
      return
    }
    navigate('/success')
    updateCart(null, null, true)
  }

  const handleFormPayment = (paymentForm: string) => {
    if (paymentForm == '') return
    setPaymentForm(paymentForm)
    toast.success(`Forma de Pagamento Escolhida - ${paymentForm}`)
  }

  return (
    <MainContainer>
      <ToastContainer />
      <FirstContainer>
        <h4>Complete seu pedido</h4>
        <Card>
          <HeadTitle>
            <MapPinLine className="yellow" size={22} />
            <div>
              <p className="subtitle">Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeadTitle>
          <Form onSubmit={handleSubmit(handleCreateAddress)}>
            <Input
              placeholder="CEP"
              width="200px"
              max={9}
              {...register('postalCode')}
            />

            <Input placeholder="Rua" width="560px" {...register('street')} />

            <OrganizerDiv>
              <Input
                placeholder="Número"
                width="200px"
                {...register('number')}
              />

              <Input
                placeholder="Complemento (opcional)"
                width="348px"
                {...register('complement')}
              />
            </OrganizerDiv>
            <OrganizerDiv>
              <Input
                placeholder="Bairro"
                width="200px"
                {...register('neighborhood')}
              />
              <Input placeholder="Cidade" width="276px" {...register('city')} />
              <Input placeholder="UF" width="60px" {...register('uf')} />
            </OrganizerDiv>

            <div>
              {errors.postalCode && (
                <div role="alert">O campo "CEP" é obrigatório</div>
              )}
              {errors.street && (
                <div role="alert">O campo "Rua" é obrigatório</div>
              )}
              {errors.number && (
                <div role="alert">O campo "Número" é obrigatório</div>
              )}
              {errors.neighborhood && (
                <div role="alert">O campo "Bairro" é obrigatório</div>
              )}
              {errors.city && (
                <div role="alert">O campo "Cidade" é obrigatório</div>
              )}
              {errors.uf && <div role="alert">O campo "UF" é obrigatório</div>}
            </div>
            <OrganizerDiv>
              <SubmitButton type="submit">Salvar</SubmitButton>
            </OrganizerDiv>
          </Form>
        </Card>

        <Card>
          <HeadTitle>
            <CurrencyDollar className="purple" size={22} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </HeadTitle>
          <OptionsPayment>
            <PaymentButton
              id="CC"
              onClick={() => handleFormPayment(PaymentFormTypes.CREDIT_CARD)}
            >
              <CreditCard size={16} />
              <span>CARTÃO DE CRÉDITO</span>
            </PaymentButton>
            <PaymentButton
              id="CD"
              onClick={() => handleFormPayment(PaymentFormTypes.DEBIT_CARD)}
            >
              <Bank size={16} />
              <span>CARTÃO DE DÉBITO</span>
            </PaymentButton>
            <PaymentButton
              id="D"
              onClick={() => handleFormPayment(PaymentFormTypes.MONEY)}
            >
              <Money size={16} />
              <span>DINHEIRO</span>
            </PaymentButton>
          </OptionsPayment>
        </Card>
      </FirstContainer>
      <SecondContainer>
        <h4>Cafés selecionados</h4>

        <CardTwo>
          {productsToAddCart.map((element) => (
            <Fragment key={element.id}>
              <CoffeeItemContainer>
                <CoffeeItemInfo>
                  <img
                    className="coffeeItem"
                    src={getImageOfProductById(element.id)}
                    alt=""
                  />
                  <CoffeeActionsDiv>
                    <p>{getNameOfProductById(element.id)}</p>
                    <ButtonsDiv>
                      <InputCount>
                        <img
                          src={LessIcon}
                          alt=""
                          onClick={() => handleLessClick(element.id)}
                        />
                        <input
                          type="number"
                          value={element.quantity}
                          min={1}
                          name="quantidade"
                          id={element.id + 'Amount'}
                        />
                        <img
                          src={PlusIcon}
                          alt=""
                          onClick={() => handlePlusClick(element.id)}
                        />
                      </InputCount>
                      <ButtonRemove onClick={() => removeFromCart(element.id)}>
                        <Trash size={16} />
                        Remover
                      </ButtonRemove>
                    </ButtonsDiv>
                  </CoffeeActionsDiv>
                </CoffeeItemInfo>
                <span>{formatCoin(getPriceOfProductById(element.id))}</span>
              </CoffeeItemContainer>
              <Separator />
            </Fragment>
          ))}

          <TotalContainer>
            <div>
              <span>Total de itens</span>
              <span>{formatCoin(getValueTotal())}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>{formatCoin(getValueTotal(), 3.5)}</span>
            </div>
          </TotalContainer>

          <ButtonConfirm onClick={handleConfirmOrder}>
            Confirmar Pedido
          </ButtonConfirm>
        </CardTwo>
      </SecondContainer>
    </MainContainer>
  )
}
