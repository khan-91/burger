
import Header from './Header/Header'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import { Route, Routes, Navigate } from 'react-router-dom'
import Order from './Order/Order'
import NavigateWrapper from './Header/NavigateWrapper'
import Auth from './Auth/Auth'
import { connect } from 'react-redux'
import { authCheck } from '../Redux/authActionCreators'
import { Component } from 'react'
import Logout from './Auth/Logout'

const mapStateToProps = state => {
  return {
    token: state.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authCheck: () => dispatch(authCheck()),
  }
}

class Main extends Component {
  componentDidMount() {
    this.props.authCheck();
  }

  render() {
    let routes = null;
    if (this.props.token === null) {
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
          <Route path='/logout' element={<Logout />} />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
