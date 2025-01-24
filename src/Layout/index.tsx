import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./styles"
import Header from "../Components/Header"

function Layout() {
  return (
    <LayoutContainer>
       <Header/>
       <Outlet/>
    </LayoutContainer>
    )
}

export default Layout
