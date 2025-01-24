import { Trash } from "phosphor-react"
import QuantityInput from "../../../../Components/QuantityInput"
import { RegularText } from "../../../../Components/Typography"
import { ActionContainer, CoffeeCartCardContainer, RemoveButton } from "./styles"
import { CartItem } from "../../../../context/CartContext"
import { formatPrice } from "../../../../utils/formatPrice"
import { useCart } from "../../../../hooks/useCart"


interface CoffeeCartProps{
  coffee: CartItem;
}

function CoffeeCartCard({coffee}:CoffeeCartProps) {

  const { changeCoffeeQuantity,removeCoffeeFromCart } = useCart();

  function handleIncreaseQuantity() {
    changeCoffeeQuantity(coffee.id, 'increase')
  }

  function handleDecreaseQuantity() {
    changeCoffeeQuantity(coffee.id, 'decrease')
  }


  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatPrice(coffeeTotal)
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/public/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle" >{coffee.name}</RegularText>
          <ActionContainer>
            <QuantityInput 
              quantity={coffee.quantity}
              onDecrease={handleDecreaseQuantity}
              onIncrease={handleIncreaseQuantity}
            size="small"/>
            <RemoveButton onClick={() => removeCoffeeFromCart(coffee.id)}>
                <Trash size={16} />
                Remover
            </RemoveButton>
          </ActionContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}

export default CoffeeCartCard
