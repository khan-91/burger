import { Component } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios'
import Spinner from '../../Spinner/Spinner'
import { resetIngredients } from '../../../Redux/actionCreators'

const mapStatetoProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  }
}

const mapDisPatchToProps = dispatch => {
  return {
    resetIngredients : () => dispatch(resetIngredients()),
  }
}
class Checkout extends Component {
  state = {
    values: {
      deliveryAddress: "",
      phone: "",
      paymentType: "Cash on Delivery",
    },
    isLoading: false,
    isModalOpen: false,
    modalMsg: "",
  }

  goBack = () => {
     this.props.navigate("/");
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
    this.setState({ isLoading: true })
    const order = {
      ingredients: this.props.ingredients,
      customer: this.state.values,
      price: this.props.totalPrice,
      orderTime: new Date(),
    }
    axios.post("https://burger-1b173-default-rtdb.firebaseio.com/orders.json", order)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            isLoading: false,
            isModalOpen: true,
            modalMsg: "Order placed successfully"
          })
          this.props.resetIngredients();
        } else {
          this.setState({
            isLoading: false,
            isModalOpen: true,
            modalMsg: "Something went wrong!!! Order again"
          })
        }
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          isModalOpen: true,
          modalMsg: "Something went wrong!!! Order again"
        })
      })
  }

  render() {
    let form = (<div>
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
        <Button className="px-4 py-2 me-2 mb-4" variant="success" type="button" onClick={this.submiyHandler} disabled={!this.props.purchasable}>
          Place Order
        </Button>
        <Button className="px-4 py-2 mb-4" style={{ backgroundColor: '#B22222', borderColor: '#B22222'}} type="button" onClick={this.goBack}>
          Cancel
        </Button>
      </Form>
    </div>)
    return (
      <div>
        {this.state.isLoading ? <Spinner /> : form}
        <Modal show={this.state.isModalOpen} onHide={this.goBack}>
          <Modal.Header closeButton />
          <Modal.Body>
            <p>{this.state.modalMsg}</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStatetoProps,mapDisPatchToProps)(Checkout)