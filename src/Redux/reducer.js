import * as actionTypes from './actionTypes';

const INGREDIENT_PRICES = {
  salad: 20,
  cheese: 40,
  meat: 60,
};

const INITIAL_STATE = {
  ingredients: [
    { type: 'salad', amount: 0 },
    { type: 'cheese', amount: 0 },
    { type: 'meat', amount: 0 },
  ],
  totalPrice: 80,
  modalOpen: false,
  purchasable: false,
  onClickCheckout: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map((item) =>
          item.type === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
      };

    case actionTypes.REMOVE_INGREDIENT:
      const updatedIngredients = state.ingredients.map((item) =>
        item.type === action.payload && item.amount > 0
          ? { ...item, amount: item.amount - 1 }
          : item
      );
      const originalItem = state.ingredients.find((i) => i.type === action.payload);
      const canRemove = originalItem && originalItem.amount > 0;

      return {
        ...state,
        ingredients: updatedIngredients,
        totalPrice: canRemove
          ? state.totalPrice - INGREDIENT_PRICES[action.payload]
          : state.totalPrice,
      };

    case actionTypes.UPDATE_PURCHASABLE:
      const totalAmount = state.ingredients.reduce((sum, item) => sum + item.amount, 0);
      return {
        ...state,
        purchasable: totalAmount > 0,
      };
    case actionTypes.RESET_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          { type: 'salad', amount: 0 },
          { type: 'cheese', amount: 0 },
          { type: 'meat', amount: 0 },
        ],
        totalPrice: 80,
        modalOpen: false,
        purchasable: false,
        onClickCheckout: false,
      }
    default:
      return state;
  }
};
