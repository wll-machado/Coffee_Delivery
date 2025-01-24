import { TitleText } from "../../../../Components/Typography"
import { coffees } from "../../../../data/Coffees"
import CoffeeCard from "../CoffeeCard"
import { CoffeeList, OurCoffeeContainer } from "./styles"

function OurCoffee() {
  return (
    <OurCoffeeContainer className="container">
      <TitleText size="l" color="subtitle" >
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee}/>
        ))}
      </CoffeeList>
    </OurCoffeeContainer>
  )
}

export default OurCoffee
