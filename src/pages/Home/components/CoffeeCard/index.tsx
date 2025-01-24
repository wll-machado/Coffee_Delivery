
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from './styles'

import { RegularText, TitleText } from '../../../../Components/Typography'
import QuantityInput from '../../../../Components/QuantityInput'
import { ShoppingCart } from 'phosphor-react'
import { formatPrice } from '../../../../utils/formatPrice';
import { useCart } from '../../../../hooks/useCart';
import { useState } from 'react';

export interface Coffee{
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}
interface CoffeeProps{
    coffee:Coffee;
}

function CoffeeCard({coffee}:CoffeeProps) {

  const [quantity, setQuantity] = useState(1);

  function handleIncrement(){
    setQuantity((state) => state + 1)
  }

  function handleDecrement(){
    setQuantity((state) => state - 1)
  }

  const { addCoffeeToCart } = useCart();
  function handleAddToCart(){
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

    const formattedPrice = formatPrice(coffee.price)
  return (
    <CoffeeCardContainer>
      <img src={`/public/coffees/${coffee.photo}`} alt={coffee.name} />

      <Tags>{
        coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
            <RegularText size='s' >$</RegularText>
            <TitleText size='m' color='text' as="strong">{formattedPrice}</TitleText>
        </div>

        <AddCartWrapper>
            <QuantityInput 
             onIncrease={handleIncrement}
             onDecrease={handleDecrement}
             quantity={quantity}
            />
            <button onClick={handleAddToCart}>
                <ShoppingCart size={22} weight="fill"  />
            </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}

export default CoffeeCard


