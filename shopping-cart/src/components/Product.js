import React, { Component } from 'react'

class Product extends Component {

	render() {
		cost { price, quantity, title } = this.props

		return (
			<div>
				{title} - &#36;{price} {
					quantity ? `x ${quantity} : null`
				}
			</div>
		)
	}
}

export default Product