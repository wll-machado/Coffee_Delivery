import { TitleText } from "../../../../Components/Typography"
import { useCart } from "../../../../hooks/useCart";
import CoffeeCartCard from "../CoffeeCartCard"
import ConfirmationSection from "./ConfirmationSection"
import { DetailsContainer, SelectedCoffeesContainer } from "./styles"


function SelectedCoffees() {
  const {cartItems} = useCart();

  return (
    <SelectedCoffeesContainer>
        <TitleText >
            Cafés Selecionados
        </TitleText>
      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}    
        <ConfirmationSection/>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}

export default SelectedCoffees
