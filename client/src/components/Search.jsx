import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAll } from '../actions/discog'
import SearchResult from './SearchResult'

export class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: ''
		}
		this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearchTextChanged = (event) => {
		this.setState({ searchText: event.target.value })
	}

	handleSearch = () => {
		this.props.searchAll(this.state.searchText);
	}

	renderSearchResults = () => {
		if(this.props.discog.searchResults.results){
			return this.props.discog.searchResults.results.map((result, index) => {
				return (
					<SearchResult key={index} result={result} />
				)
			})
		}
	}

	render() {
		return (
			<div>
        <input type="text" value={this.state.searchText} onChange={this.handleSearchTextChanged} />
				<button type="button" onClick={this.handleSearch}>Search</button>
				<div>
					{this.renderSearchResults()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		discog: store.discog
	}
}

export default connect(mapStateToProps, { searchAll })(Search);
