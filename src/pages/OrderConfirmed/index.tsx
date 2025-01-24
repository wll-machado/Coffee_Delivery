import { RegularText, TitleText } from "../../Components/Typography"
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles"
import delivery from '../../assets/Illustration.svg'
import { MapPin, Clock, CurrencyDollar } from "phosphor-react"
import { useTheme } from "styled-components"
import Info from "../../Components/InfoWithIcon"
import { useLocation, useNavigate } from "react-router-dom"
import { OrderData } from "../CompleteOrder"
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions"
import { useEffect } from "react"


interface LocationType {
  state: OrderData
}
function OrderConfirmed() {

    const {state} = useLocation() as unknown as LocationType

    const {colors} = useTheme()

    const navigate = useNavigate()
    useEffect(() => {
      if(!state) {
        navigate("/")      }
    }, [])

    if(!state) {
        return <></>
    }

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText>
            Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
            <Info icon={<MapPin weight="fill" />} 
            text={
                <RegularText>
                    Entrega em <strong> {state.street} , {state.number} </strong> <br />
                    {state.district} - {state.city}, {state.uf}
                </RegularText>
            } 
            iconBg={colors["brand-purple"]}/>

            <Info icon={<Clock weight="fill" />} 
            text={
                <RegularText>
                    Previsão de entrega <br />
                    <strong>20 min - 30 min</strong>
                </RegularText>
            } 
            iconBg={colors["brand-yellow"]}/>

            <Info icon={<CurrencyDollar weight="fill" />} 
            text={
                <RegularText>
                    Pagamento na entrega <br />
                    <strong>{paymentMethods[state.paymentMethod].label}</strong>
                </RegularText>
            } 
            iconBg={colors["brand-yellow"]}/>
        </OrderDetailsContainer>

        <img src={delivery} alt="motoboy ilustrado indo fazer entrega" />
      </section>
    </OrderConfirmedContainer>
  )
}

export default OrderConfirmed
