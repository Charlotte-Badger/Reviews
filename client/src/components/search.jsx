import React from 'react';
import { magnifyingGlassPath, xPath } from '../svg.js';
import {
  SearchWrapper,
  SearchInput,
  SearchBar,
  ClearSearchBar,
  ClearSearchBarSVG,
  MagnifyingGlassSVG,
  SearchButton
} from '../styles/search.style.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.filterByTerm = this.filterByTerm.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.state = {
      term: '',
    };
  }

  handleTermChange(e) {
    this.setState({term: e.target.value});
  }

  filterByTerm(term) {
    term = term.trim();
    if (term === '') {
      return;
    }
    if (!this.props.currentTier) {
      this.props.setReviewsFilteredBySearch(term);
    } else {
      this.props.setReviewsFilteredBySearchAndTier(term, this.props.currentTier);
    }
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.filterByTerm(this.state.term);
    }
  }

  resetSearch() {
    this.setState({term: ''});
    this.props.setReviewsFilteredBySearch(null);
    document.getElementById('reviewSearch').value = '';
  }

  render() {
    return (
      <SearchWrapper>
        <SearchInput>
          <SearchBar id="reviewSearch" className="searchBar" type="text" placeholder="Search reviews" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}>
          </SearchBar>
          <ClearSearchBar id="clearSearch" onClick={this.resetSearch} style={this.state.term ? {visibility: 'visible'} : {visibility: 'hidden'}}>
            <ClearSearchBarSVG viewBox="0 0 24 24">
              <path fill="rgb(115, 114, 108)" d={xPath}/>
            </ClearSearchBarSVG>
          </ClearSearchBar>
        </SearchInput>
        <SearchButton className="searchButton" type="submit" onClick={() => { this.filterByTerm(this.state.term); }}>
          <MagnifyingGlassSVG viewBox="0 0 24 24" height="24px" width="24px">
            <path fill="rgb(255, 255, 255)" d={magnifyingGlassPath}/>
          </MagnifyingGlassSVG>
        </SearchButton>
      </SearchWrapper>
    );
  }
}




export default Search;