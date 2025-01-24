import { Trash } from "phosphor-react"
import QuantityInput from "../../../../Components/QuantityInput"
import { RegularText } from "../../../../Components/Typography"
import { ActionContainer, CoffeeCartCardContainer, RemoveButton } from "./styles"


function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="" alt="" />
        <div>
          <RegularText color="subtitle" >Expresso Tradicional</RegularText>
          <ActionContainer>
            <QuantityInput size="small"/>
            <RemoveButton>
                <Trash size={16} />
                Remover
            </RemoveButton>
          </ActionContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}

export default CoffeeCartCard
