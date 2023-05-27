import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import logo from '../../assets/images/Logo.svg';
import {
  ButtonLocation,
  Cart,
  CartContainer,
  HeaderContainer,
  Location,
  TotalCountItems,
} from './styles';
import { CartContext } from '../../contexts/CartContext';

export function Header() {
  const { productsToAddCart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src={logo} />
      </Link>
      <CartContainer>
        <ButtonLocation>
          <MapPin size={22} weight="fill" />
          <p>Florianópolis, SC</p>
        </ButtonLocation>
        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </Link>
        {productsToAddCart.length > 0 ? (
          <TotalCountItems>{productsToAddCart.length}</TotalCountItems>
        ) : (
          ''
        )}
      </CartContainer>
    </HeaderContainer>
  );
}
