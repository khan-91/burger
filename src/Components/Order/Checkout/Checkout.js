import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses'

const mapStatetoProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  }
}
class Checkout extends Component {
  state = {
    values: {
      deliveryAddress: "",
      phone: "",
      paymentType: "Cash on Delivery",
    },
  }

  inputChangeHandler = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  }

  submiyHandler = () => {
    const order = {
      ingredients: this.props.ingredients,
      customer: this.state.values,
      price: this.props.totalPrice,
      orderTime: new Date(),
    }
    axios.post("https://burger-1b173-default-rtdb.firebaseio.com/orders.json",  order)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h3>Checkout</h3>
        <h4 style={{
          border: "1px solid grey",
          boxShadow: "1px 1px #888888",
          borderRadius: "5px",
          padding: "20px"
        }}>Payment: {this.props.totalPrice} BDT</h4>
        <Form style={{
          border: "1px solid grey",
          boxShadow: "1px 1px #888888",
          borderRadius: "5px",
          padding: "20px"
        }}>
          <Form.Group className='p-1 mb-4'>
            <Form.Control name="deliveryAddress" as="textarea" value={this.state.values.deliveryAddress} placeholder="Your Address" onChange={(e) => this.inputChangeHandler(e)} />
          </Form.Group>
          <Form.Group className='p-1 mb-4'>
            <Form.Control name="phone" value={this.state.values.phone} placeholder="Phone Number" onChange={(e) => this.inputChangeHandler(e)} />
          </Form.Group>
          <Form.Group className='p-1 mb-4'>
            <Form.Select name="paymentType"
              value={this.state.values.paymentType}
              onChange={this.inputChangeHandler} >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Bkash">Bkash</option>
              <option value="Nagad">Nagad</option>
            </Form.Select>
          </Form.Group>
          <Button className="px-4 py-2 me-2 mb-4" variant="success" type="button" onClick={this.submiyHandler}>
            Place Order
          </Button>
          <Button className="px-4 py-2 mb-4" style={{ backgroundColor: '#B22222', borderColor: '#B22222' }} type="button">
            Cancel
          </Button>
        </Form>
      </div>
    )
  }
}

export default connect(mapStatetoProps)(Checkout)