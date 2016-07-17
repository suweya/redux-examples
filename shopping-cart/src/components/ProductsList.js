import React, { Component } from 'react'

export default class ProductsList extends Component {

	render() {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<div>{this.props.children}</div>
			</div>
		)
	}
}