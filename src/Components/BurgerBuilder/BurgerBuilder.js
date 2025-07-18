import { Component } from 'react';
import Burger from './burger/Burger';
import Controls from './Controls/Controls';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Summary from './Summary/Summary';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addIngredient, removeIngredient, updatePurchasable } from '../../Redux/actionCreators';


const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  }
}
const mapDisPatchToProps = dispatch => {
  return {
    addIngredient: (igtype) => dispatch(addIngredient(igtype)),
    removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
    updatePurchasable: () => dispatch(updatePurchasable()),
  }
}
export class BurgerBuilder extends Component {
  state = {
    modalOpen: false,
  }

  addIngredentHandle = type => {
    this.props.addIngredient(type);
    this.props.updatePurchasable();
  }

  removeIngredientHandle = type => {
    this.props.removeIngredient(type);
    this.props.updatePurchasable();
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  handleCheckout = () => {
    this.setState({
      onClickCheckout: true
    })
  }

  render() {
    return (
      <div>
        <div className='d-flex flex-md-row flex-column'>
          <Burger ingredients={this.props.ingredients} />
          <Controls
            ingredientAdded={this.addIngredentHandle}
            ingredientRemoved={this.removeIngredientHandle}
            price={this.props.totalPrice}
            toggleModal={this.toggleModal}
            purchasable={this.props.purchasable}
          />
        </div>
        <Modal show={this.state.modalOpen} onHide={this.toggleModal}>
          <Modal.Header>
            <Modal.Title>Your Order Summary</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Total price: {this.props.totalPrice.toFixed(0)} BDT</h5>
            <Summary ingredients={this.props.ingredients} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={this.handleCheckout}>
              Continue to Checkout
            </Button>
            <Button variant='secondary' onClick={this.toggleModal}>
              Cancel
            </Button>
          </Modal.Footer>
          {this.state.onClickCheckout && <Navigate to='/checkout' replace={true} />}
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(BurgerBuilder);