
import Button from '../../../../Components/Button'
import { RegularText } from '../../../../Components/Typography'
import { ConfirmationSectionContainer } from './styles'

function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText  size='s'>Total de itens</RegularText>
        <RegularText  >R$ 9,70</RegularText>
      </div>
      <div>
        <RegularText  size='s'>Entrega</RegularText>
        <RegularText  >R$ 3,70</RegularText>
      </div>
      <div>
        <RegularText weight="700" size='l' color='subtitle'>Total</RegularText>
        <RegularText weight="700" size='l' color='subtitle'>R$15,70</RegularText>
      </div>

      <Button text='Confirmar pedido' />
    </ConfirmationSectionContainer>
  )
}

export default ConfirmationSection
