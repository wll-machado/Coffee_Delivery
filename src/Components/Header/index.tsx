
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'
import coffee from '../../assets/Logo.svg'
import {MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'


function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className='container'>
        <NavLink to="/">
          <img src={coffee} alt="Logo do Coffee Delivery"
          />
        </NavLink>

        <HeaderButtonContainer>
            <HeaderButton variant='purple'>
                <MapPin size={20} weight="fill"  />
                 Rio de Janeiro, RJ
            </HeaderButton>
            <NavLink to="/completeOrder">
              <HeaderButton variant='yellow'>
                {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                <ShoppingCart size={20} weight="fill" />
              </HeaderButton>
            </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}

export default Header
