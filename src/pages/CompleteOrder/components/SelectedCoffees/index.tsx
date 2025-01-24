import { TitleText } from "../../../../Components/Typography"
import CoffeeCartCard from "../CoffeeCartCard"
import ConfirmationSection from "./ConfirmationSection"
import { DetailsContainer, SelectedCoffeesContainer } from "./styles"


function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
        <TitleText >
            Cafés Selecionados
        </TitleText>
      <DetailsContainer>
        <CoffeeCartCard/>
        <CoffeeCartCard/>

        <ConfirmationSection/>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}

export default SelectedCoffees
