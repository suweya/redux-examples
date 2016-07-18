import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

const API_ROOT = 'https://api.github.com/'

getNextPageUrl = (response) => {
	const link = response.headers.get('link')
	if (!link) {
		return null
	}

	const nextLink = link.split(',').find(s = > s.indexOf('rel="next"') > -1)
	if (!nextLink) {
		return null 
	}

	// slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array
	return nextLink.split(';')[0].slice(1, -1)
}

callApi = (endpoint, schema) => {
	const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

	return fetch(fullUrl)
		.then(response => response.json().then(json => ({json, response})))
		.then(({json, response}) => {
			if (!response.ok) {
				return Promise.reject(json)
			}

			const camelizedJson = camelizeKeys(json)
			const nextPageUrl = getNextPageUrl(response)

			return Object.assign({}, normalize(camelizedJson, schema), {nextPageUrl})
		})
}

const userSchema = new Schema('users', {
	idAttribute: user => user.login.toLowerCase()
})

const repoSchema = new Schema('repos', {
	idAttribute: repo => repo.fullName.toLowerCase()
})

repoSchema.define({
	owner: userSchema
})

export const Schemas = {
	USER: userSchema,
	USER_ARRAY: arrayOf(userSchema),
	REPO: repoSchema,
	REPO_ARRAY: arrayOf(repoSchema)
}

export const CALL_API = Symbol('CALL API')

export default store => next => action => {
	const callAPI = action[CALL_API]
	
}