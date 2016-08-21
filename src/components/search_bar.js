import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}
    }

    render() {
        return (
            <div className="search-bar">
                {/*<form className="form-inline" onSubmit={this.handleSubmit}>*/}
                <form className="form-inline" onSubmit={(event) => this.handleSubmit(event)}>
                    <input className="form-control"
                           value={this.state.term}
                           onChange={(event) => this.onInputChange(event.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.onSearch(this.state.term);
    }

    onInputChange(term) {
        this.setState({term});
        //this.props.onSearch(term);
    }
}

export default SearchBar;