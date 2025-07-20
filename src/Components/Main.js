
import Header from './Header/Header'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import { Route, Routes } from 'react-router-dom'
import Order from './Order/Order'
import NavigateWrapper from './Header/NavigateWrapper'
import Auth from './Auth/Auth'

const Main = props => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<BurgerBuilder />} />
          <Route path='/order' element={<Order />} />
          <Route path='/checkout' element={<NavigateWrapper />} />
          <Route path='/login' element={<Auth />} />
        </Routes> 
      </div>

    </div>
  )
}

export default Main