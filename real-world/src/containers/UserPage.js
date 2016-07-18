import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUser, loadStarred } from '../actions'
import User from '../components/User'
import Repo from '../components/Repo'
import List from '../components/List'
import zip from 'lodash/zip'

loadData = (props) => {
	const { login } = props
	props.loadUser(login, ['name'])
	props.loadStarred(login)
}

class UserPage extends Component {
	constructor(props) {
		super(props)
		this.renderRepo = this.renderRepo.bind(this)
		this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this)
	}

	componentWillMount() {
		loadData(this.props)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.login !== this.props.login) {
			loadData(nextProps)
		}
	}

	handleLoadMoreClick() {
		this.props.loadStarred(this.props.login, true)
	}

	renderRepo([repo, owner]) {
		return (
			<Repo repo={repo} owner={owner} key={repo.fullName} />
		)
	}

	render() {
		const { user, login } = this.props
		if (!user) {
			return (
				<h1><i>Loading {login}'s profile...</i></h1>
			)
		}

		const { starredRepos, starredRepoOwners, starredPagination } = this.props
		return (
			<div>
				<User user={user}/>
				<hr />
				<List renderItem={this.renderRepo} 
					  items={zip(starredRepos, starredRepoOwners)}
					  onLoadMoreClick={this.handleLoadMoreClick}
					  laodingLabel={`Loading ${login}'s starred...`}
					  {...starredPagination} />
			</div>
		)
	}
}

mapStateToProps = (state, ownProps) => {
	const login = ownProps.params.login.toLowerCase()
}