import React from 'react';

class SearchBar extends React.Component {

  state = {
    search: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  }

  render() {
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
            <label htmlFor="search">Search Videos</label>
            <input type="text" name="search" className="prompt" placeholder="Search for a video" value={this.state.search} onChange={(e) => this.setState({ search: e.target.value }) }/>
        </form>
      </div>
    )
  }

}

export default SearchBar;