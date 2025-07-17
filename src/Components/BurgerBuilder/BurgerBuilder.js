import { Component } from 'react'
import Burger from './burger/Burger'
import Controls from './Controls/Controls'
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
      <div className='d-flex flex-md-row flex-column'>
        <Burger ingredients = {this.state.ingredients} />
        <Controls />
      </div>
    )
  }
}

export default BurgerBuilder