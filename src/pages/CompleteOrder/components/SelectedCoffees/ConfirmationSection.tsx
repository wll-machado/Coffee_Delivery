
import Button from '../../../../Components/Button'
import { RegularText } from '../../../../Components/Typography'
import { useCart } from '../../../../hooks/useCart';
import { formatPrice } from '../../../../utils/formatPrice';
import { ConfirmationSectionContainer } from './styles'

function ConfirmationSection() {

  const { cartItemsTotal, cartQuantity } = useCart();

  const DeliveryPrice = 3.5;

  const cartTotal = cartItemsTotal + DeliveryPrice;

  const formattedCartItemsTotal = formatPrice(cartItemsTotal);
  const formattedCartTotal = formatPrice(cartTotal);
  const formattedDeliveryPrice = formatPrice(DeliveryPrice);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText  size='s'>Total de itens</RegularText>
        <RegularText  >R$ {formattedCartItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText  size='s'>Entrega</RegularText>
        <RegularText  >R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" size='l' color='subtitle'>Total</RegularText>
        <RegularText weight="700" size='l' color='subtitle'>R$ {formattedCartTotal}</RegularText>
      </div>

      <Button text='Confirmar pedido' type='submit' disabled={cartQuantity <= 0}/>
    </ConfirmationSectionContainer>
  )
}

export default ConfirmationSection
