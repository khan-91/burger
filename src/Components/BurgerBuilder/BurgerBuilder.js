import { Component } from 'react';
import Burger from './burger/Burger';
import Controls from './Controls/Controls';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Summary from './Summary/Summary';

const ingredientPrices = {
  salad: 20,
  cheese: 40,
  meat: 60,
}
export class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: 'salad', amount: 0 },
      { type: 'cheese', amount: 0 },
      { type: 'meat', amount: 0 },
    ],
    totalPrice: 80,
    modalOpen: false,
    purchasable: false,
  }

  updatePurchasable = ingredients => {
    const sum = ingredients.reduce((sum, element) => {
      return sum + element.amount;
    }, 0);
    this.setState({purchasable: sum > 0})
  }

  addIngredentHandle = type => {
    const ingredients = [...this.state.ingredients];
    let newPrice = this.state.totalPrice + ingredientPrices[type];
    for (let item of ingredients) {
      if (item.type === type) {
        item.amount++;
        break;
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: newPrice });
    this.updatePurchasable(ingredients);
  }

  removeIngredientHandle = type => {
    const ingredients = [...this.state.ingredients];
    let newPrice = this.state.totalPrice;
    for (let item of ingredients) {
      if (item.type === type) {
        if (item.amount <= 0) {
          return;
        }
        item.amount--;
        newPrice -= ingredientPrices[type];
        break;
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: newPrice });
    this.updatePurchasable(ingredients);
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  render() {
    return (
      <div>
        <div className='d-flex flex-md-row flex-column'>
          <Burger ingredients={this.state.ingredients} />
          <Controls
            ingredientAdded={this.addIngredentHandle}
            ingredientRemoved={this.removeIngredientHandle}
            price={this.state.totalPrice}
            toggleModal={this.toggleModal}
            purchasable={this.state.purchasable}
          />
        </div>
        <Modal show={this.state.modalOpen} onHide={this.toggleModal}>
          <Modal.Header>
            <Modal.Title>Your Order Summary</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Total price: {this.state.totalPrice.toFixed(0)} BDT</h5>
            <Summary ingredients={this.state.ingredients} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={this.toggleModal}>
              Continue to Checkout
            </Button>
            <Button variant='secondary' onClick={this.toggleModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default BurgerBuilder