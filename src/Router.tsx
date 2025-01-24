import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import CompleteOrder from './pages/CompleteOrder'
import OrderConfirmed from './pages/OrderConfirmed'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrder/>} />
        <Route path="/OrderConfirmed" element={<OrderConfirmed/>} />
      </Route>
    </Routes>
  )
}

export default Router
