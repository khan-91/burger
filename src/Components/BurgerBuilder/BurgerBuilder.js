import React, { Component } from 'react'
import Burger from './burger/Burger'
import Ingredients from './Ingredients/Ingredients'
export class BurgerBuilder extends Component {
  state = {
     ingredients: [
      { type:'salad', ammount: 1 },
      { type:'cheese', ammount: 1 },
      { type:'meat', ammount: 2 },
     ]
  }
  render() {
    return (
      <div>
        <Burger ingredients = {this.state.ingredients} />
      </div>
    )
  }
}

export default BurgerBuilder