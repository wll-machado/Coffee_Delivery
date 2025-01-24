import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles"
import cup from "../../../../assets/coffecup.svg"
import { RegularText } from "../../../../Components/Typography"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { useTheme } from "styled-components"
import Info from "../../../../Components/InfoWithIcon"

function Intro() {
  const {colors} = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <Info 
            iconBg={colors["brand-yellow-dark"]}
            text="Compra simples e segura"
             icon={<ShoppingCart weight="fill"
             />}/>
            
            <Info 
            iconBg={colors["base-text"]}
            text="Embalagem mantém o café intacto"
             icon={<Package weight="fill"
             />}/>
<Info 
            iconBg={colors["brand-yellow"]}
            text="Entrega rápida e rastreada"
             icon={<Timer weight="fill"
             />}/>

<Info 
            iconBg={colors["brand-purple"]}
            text="O café chega fresquinho até você"
             icon={<Coffee weight="fill"
             />}/>
          </BenefitsContainer>
        </div>
        <img src={cup} alt="imagem copo de cafe" />
      </IntroContent>
    </IntroContainer>
  )
}

export default Intro
