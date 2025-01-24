import { PaymentMethodContainer } from "./styles";
import { CreditCard } from "phosphor-react";

function PaymentMethodInput() {
  return (
    <PaymentMethodContainer>
      {<CreditCard size={16} />}
      Cartão de Credito
    </PaymentMethodContainer>
  )
}

export default PaymentMethodInput
