import React, { Component } from 'react'
import Product from './Product'

class ProductItem extends Component {

	render() {
		const { product } = this.props

		return (
			<div style={{ marginBottom: 20 }}>
				<Product title={product.title} price={product.price}/>
				<button onClick={this.props.onAddToCartClicked} disabled={product.inventory > 0 ? '' : 'disabled'}>
					{product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
				</button>
			</div>
		)
	}
}

export default ProductItem