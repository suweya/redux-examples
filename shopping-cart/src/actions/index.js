import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

receiveProducts = (products) => {
	return {
		type: types.RECEIVE_PRODUCTS,
		products: products
	}
}

export getAllProducts = () => {
	return dispatch => {
		shop.getProducts(products => {
			dispatch(receiveProducts(products))
		})
	}
}

addToCartUnsafe = (productId) => {
	return {
		type: types.ADD_TO_CART,
		productId
	}
}

export addToCart = (productId) => {
	return (dispatch, getState) => {
		if (getState().products.byId[productId].inventory > 0) {
			dispatch(addToCartUnsafe(productId))
		}
	}
}

export checkout = (products) => {
	return (dispatch, getState) => {
		const cart = getState().cart

		dispatch({
			type: types.CHECKOUT_REQUEST
		})

		shop.buyProducts(products, () => {
			dispatch({
				type: types.CHECKOUT_SUCCESS,
				cart
			})
		})
	}
}