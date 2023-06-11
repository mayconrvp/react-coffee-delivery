import React, { ReactNode, createContext, useEffect, useState } from 'react'

import Expresso from '../assets/images/cups/Type=Expresso.svg'

import { products } from '../data/products'

interface Product {
  id: string
  name: string
  description: string
  type: string[]
  price: number
  quantity: number
  srcImage: string
}

interface ProductToAddToCart {
  id: string
  quantity: number
}

interface CartContextProviderProps {
  children: ReactNode
}

interface NewAddressFormData {
  number: string
  postalCode: string
  street: string
  neighborhood: string
  city: string
  uf: string
  complement?: string
}

interface CartContextType {
  products: Product[]
  productsToAddCart: ProductToAddToCart[]
  handleAddProductToCart: (id: string) => boolean
  getNameOfProductById(id: string): string
  getPriceOfProductById(id: string): number
  getImageOfProductById(id: string): string
  removeFromCart: (id: string) => void
  getValueTotal: () => number
  saveAddress: (data: any) => void
  updateCart: (id: string, quantity: number, clear?: boolean) => void
  address: NewAddressFormData | undefined
  setAddress: React.Dispatch<
    React.SetStateAction<NewAddressFormData | undefined>
  >
  paymentForm: string
  setPaymentForm: React.Dispatch<React.SetStateAction<string>>
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartContextProviderProps) {
  const [productsToAddCart, setProductsToAddCart] = useState<
    ProductToAddToCart[]
  >([])
  const [paymentForm, setPaymentForm] = useState('')
  const [address, setAddress] = useState<NewAddressFormData | undefined>()

  useEffect(() => {
    const arrProductsAsJson = localStorage.getItem('@coffeeDelivery-cart')

    if (arrProductsAsJson) {
      setProductsToAddCart(JSON.parse(arrProductsAsJson))
    }
  }, [])

  useEffect(() => {
    console.log(productsToAddCart)
    verifyAndUpdateInput()
    saveCart()
  }, [productsToAddCart])

  const handleAddProductToCart = (id: string) => {
    console.log('Add To Cart', id)
    const amount = Number(
      (document.getElementById(id + 'Amount') as HTMLInputElement).value,
    )
    const productToAdd = {
      id,
      quantity: amount,
    }
    if (productsToAddCart.find((element) => element.id == id)) {
      console.log('Produto já adicionado ao carrinho')
      return false
    } else {
      setProductsToAddCart((state) => [...state, productToAdd])
      return true
    }
  }

  const saveCart = () => {
    const products = JSON.stringify(productsToAddCart)
    localStorage.setItem('@coffeeDelivery-cart', products)
  }
  const saveAddress = (data: any) => {
    setAddress(data)
    const address = JSON.stringify(data)
    localStorage.setItem('@coffeeDelivery-address', address)
  }

  const verifyAndUpdateInput = () => {
    console.log('El', productsToAddCart)
    productsToAddCart.forEach((el) => {
      ;(document.getElementById(el.id + 'Amount') as HTMLInputElement)!.value =
        String(el.quantity)
    })
  }

  const removeFromCart = (id: string) => {
    const products = productsToAddCart.filter((product) => product.id !== id)
    setProductsToAddCart(products)
  }

  function getImageOfProductById(id: string) {
    const product = products.find((element) => element.id === id)
    if (product) return product?.srcImage
    return Expresso
  }

  function getNameOfProductById(id: string) {
    const product = products.find((element) => element.id === id)
    if (product) return product?.name
    return 'Nome indefinido'
  }

  function getPriceOfProductById(id: string) {
    const product = products.find((element) => element.id === id)
    if (product) return product.price
    return 0
  }

  const getValueTotal = () => {
    const total = productsToAddCart.reduce((acc, elem) => {
      return getPriceOfProductById(elem.id) * elem.quantity + acc
    }, 0)
    console.log('TOTAL', total)
    return total
  }

  const updateCart = (id: string, quantity: number, clear = false) => {
    if (clear) {
      setProductsToAddCart([])
    } else {
      const productsArr = [...productsToAddCart]
      const updatedProductsArr = productsArr.map((element) => {
        if (element.id === id) {
          element.quantity = quantity
        }
        return element
      })
      setProductsToAddCart(updatedProductsArr)
    }
  }

  return (
    <CartContext.Provider
      value={{
        products,
        productsToAddCart,
        handleAddProductToCart,
        getNameOfProductById,
        getPriceOfProductById,
        getImageOfProductById,
        removeFromCart,
        getValueTotal,
        saveAddress,
        updateCart,
        address,
        setAddress,
        paymentForm,
        setPaymentForm,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
