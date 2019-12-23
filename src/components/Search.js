import React, { Component } from 'react';
import '../style/Search.scss';

class Search extends Component {
    state = {
        value: '',
    }

    handleSearch = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.props.search(this.state.value);
        }
    }

    render() {
        return (
            <div className="searchPanel">
                <input className="searchInput" type="text" placeholder="Search drink" value={this.state.value} onChange={this.handleSearch} />
            </div>
        );
    }
}

export default Search;