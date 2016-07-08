import React from 'react'
import style from '../../style/todo.css'

export default class Footer extends React.Component {

	itemClick(type) {
		this.props.setFilter(type)
	}

	render() {
		return (
			<ul>
				<li className={this.props.filter === 'SHOW_ALL' ? style.active : ''} onClick={this.itemClick.bind(this, 'SHOW_ALL')}>SHOW_ALL</li>
				<li className={this.props.filter === 'SHOW_ACTIVE' ? style.active : ''} onClick={this.itemClick.bind(this, 'SHOW_ACTIVE')}>SHOW_ACTIVE</li>
				<li className={this.props.filter === 'SHOW_COMPLETED' ? style.active : ''} onClick={this.itemClick.bind(this, 'SHOW_COMPLETED')}>SHOW_COMPLETED</li>
			</ul>
		)
	}
}