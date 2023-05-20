import { ButtonLocation, Cart, CartContainer, HeaderContainer, Location } from "./styles"
import logo  from '../../assets/images/Logo.svg'
import { Timer, Scroll, MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo}/>
      <CartContainer>
        <ButtonLocation>
          <MapPin size={22} weight="fill"/>
          <p>Florianópolis, SC</p>
        </ButtonLocation>
        
        <NavLink to='/checkout'>
          <Cart>
            <ShoppingCart size={22} weight="fill"/>
          </Cart>
        </NavLink>
        
      </CartContainer>
    </HeaderContainer>
  )
}