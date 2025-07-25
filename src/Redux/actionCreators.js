
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addIngredient = igType => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: igType,
    }
}

export const removeIngredient = igType => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: igType,
    }
}

export const updatePurchasable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASABLE,
    }
}

export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS,
    }
}

export const loadOrders = orders => {
    return {
        type: actionTypes.LOAD_ORDERS,
        payload: orders,
    }
}

export const orderLoadFailed = () => {
    return {
        type: actionTypes.ORDER_LOAD_FAILED,
    }
}

export const fetchOrder = (token, userId) => dispatch => {
    const queryParams = '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('https://burger-1b173-default-rtdb.firebaseio.com/orders.json?auth=' + token + queryParams)
        .then(response => {
            dispatch(loadOrders(response.data));
        })
        .catch(error => {
            dispatch(orderLoadFailed());
        });
}