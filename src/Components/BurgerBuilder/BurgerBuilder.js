import { Component } from 'react'
import Burger from './burger/Burger'
import Controls from './Controls/Controls'

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
  }

  removeIngredientHandle = type => {
    const ingredients = [...this.state.ingredients];
    let newPrice = this.state.totalPrice;
    //- ingredientPrices[type];
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
  }

  render() {
    return (
      <div className='d-flex flex-md-row flex-column'>
        <Burger ingredients={this.state.ingredients} />
        <Controls
          ingredientAdded={this.addIngredentHandle}
          ingredientRemoved={this.removeIngredientHandle}
          price={this.state.totalPrice}
        />
      </div>
    )
  }
}

export default BurgerBuilder