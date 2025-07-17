import Ingredients from "../Ingredients/Ingredients"
import './Burger.css'
const Burger = props => {
  let ingredientArr = props.ingredients.map(item => {
    let amountArr = [...Array(item.amount).keys()]
    return amountArr.map(_ => {
      return <Ingredients type={item.type} key={Math.random()} />
    })
  }, [])
  .reduce((arr, element) => {
    return arr.concat(element);
  })

  if(ingredientArr.length === 0) {
    ingredientArr = <p>Please add some ingredients!</p>
  }

  return (
    <div className="Burger">
      <Ingredients type="bread-top" />
      {ingredientArr}
      <Ingredients type="bread-bottom" />

    </div>
  )
}

export default Burger