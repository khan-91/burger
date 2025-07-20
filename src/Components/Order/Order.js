import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrder} from '../../Redux/actionCreators'

const mapStateToProps = state => {
  return{
    orders: state.orders,
    orderLoading: state.orderLoading,
    orderError: state.orderError,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrder: () => dispatch(fetchOrder()),
  }
}
class Order extends Component {
  componentDidMount(){
    this.props.fetchOrder();
  }
  componentDidUpdate(){
    console.log(this.props);
    
  }
  render() {
    return (
      <div>Order</div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);