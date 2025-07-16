import Ingredients from "../Ingredients/Ingredients"

const Burger = props => {
  return (
    <div>
      <Ingredients type="bread-top" />
      <Ingredients type="bread-bottom" />

    </div>
  )
}

export default Burger