import React from 'react';

// const SearchBar = () => {
//     return <input />;
// };

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}
    }

    render() {
        return (
            <div>
                {/*<input onChange={this.onInputChange}/>*/}
                <input onChange={(event) => this.setState({ term: event.target.value })} />
                <p>value: {this.state.term}</p>
            </div>
        )
    }

    onInputChange(event) {
        console.log(this);
        this.setState({term: event.target.value});
    }
}

export default SearchBar;