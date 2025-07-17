import { Component } from 'react'
import Burger from './burger/Burger'
import Controls from './Controls/Controls'
export class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: 'salad', ammount: 0 },
      { type: 'cheese', ammount: 0 },
      { type: 'meat', ammount: 0 },
    ]
  }

  addIngredentHandle = type => {
    const ingredients = [...this.state.ingredients];
    for (let item of ingredients) {
      if (item.type === type) {
        item.ammount++;
      }
      this.setState({ ingredients: ingredients })
    }

  }

  removeIngredientHandle = type => {
    const ingredients = [...this.state.ingredients];
    for (let item of ingredients) {
      if (item.type === type) {
        if (item.ammount <= 0) {
          return;
        }
        item.ammount--;
      }
      this.setState({ ingredients: ingredients });
    }

  }

  render() {
    return (
      <div className='d-flex flex-md-row flex-column'>
        <Burger ingredients={this.state.ingredients} />
        <Controls
          ingredientAdded={this.addIngredentHandle}
          ingredientRemoved={this.removeIngredientHandle}
        />
      </div>
    )
  }
}

export default BurgerBuilder