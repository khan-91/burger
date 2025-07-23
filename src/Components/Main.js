
import Header from './Header/Header'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import { Route, Routes, Navigate } from 'react-router-dom'
import Order from './Order/Order'
import NavigateWrapper from './Header/NavigateWrapper'
import Auth from './Auth/Auth'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    token: state.token,
  }
}

const Main = props => {

  let routes = null;
  if (props.token === null) {
    routes = (
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route path='*' element={<Navigate to="/login" replace />} />
      </Routes>
    )
  } else {
    routes = (
      <Routes>
        <Route path='/' element={<BurgerBuilder />} />
        <Route path='/order' element={<Order />} />
        <Route path='/checkout' element={<NavigateWrapper />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    )
  }

  return (
    <div>
      <Header />
      <div className='container'>
        {routes}
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Main)
