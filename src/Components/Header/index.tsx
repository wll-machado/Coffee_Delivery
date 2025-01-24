
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'
import coffee from '../../assets/Logo.svg'
import {MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from 'react-router-dom'


function Header() {
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
                <ShoppingCart size={20} weight="fill" />
              </HeaderButton>
            </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}

export default Header
