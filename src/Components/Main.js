
import Header from './Header/Header'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import { Route, Routes } from 'react-router-dom'
import Order from './Order/Order'
import NavigateWrapper from './Header/NavigateWrapper'
const Main = props => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<BurgerBuilder />} />
          <Route path='/order' element={<Order />} />
          {/* <Route path='/checkout' element={<Checkout />}/> */}
          <Route path='/checkout' element={<NavigateWrapper />} />
        </Routes> 
      </div>

    </div>
  )
}

export default Main