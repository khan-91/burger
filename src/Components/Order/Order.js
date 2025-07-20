import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrder } from '../../Redux/actionCreators'
import SingleOrder from './SingleOrder/SingleOrder'
import Spinner from '../Spinner/Spinner'

const mapStateToProps = state => {
  return {
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
  componentDidMount() {
    this.props.fetchOrder();
  }
  componentDidUpdate() {
    console.log(this.props);

  }
  render() {
    let orders = null;
    if (this.props.orderError) {
      orders = <p style={{
        border: "1px solid grey",
        boxShadow: "1px 1px #888888",
        borderRadius: "5px",
        padding: "20px",
        marginBottom: "10px",
      }}>Sorry failed to load order</p>
    }
    else {
      if (this.props.orders.length === 0) {
        orders = <p style={{
          border: "1px solid grey",
          boxShadow: "1px 1px #888888",
          borderRadius: "5px",
          padding: "20px",
          marginBottom: "10px",
        }}>You have no orders</p>
      }
      else {
        orders = this.props.orders.map(order => {
          return <SingleOrder order={order} key={order.id} />
        })
      }
    }

    return (
      <div>
        {this.props.orderLoading ? <Spinner /> : orders}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);