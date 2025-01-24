import OurCoffee from "./components/OurCoffee"
import Intro from "./components/intro"
import { HomeContainer } from "./styles"

function Home() {
 
  return (
    <HomeContainer>
        <Intro />
        <OurCoffee />
    </HomeContainer>
  )
}

export default Home
