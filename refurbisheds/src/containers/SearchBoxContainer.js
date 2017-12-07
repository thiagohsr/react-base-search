import React, { Component } from 'react';

class SearchBoxContainer extends Component {
    constructor(props) {
        super(props);
    }

    searchByDescription(keyword) {
        const {
            updateFilter
        } = this.props;
        const searchUrl = `http://localhost:8081/api/refurbisheds/${keyword}/description/`;

        fetch(searchUrl)
            .then( (response) => {
                return response.json();
            })
            .then( (json) => {
                updateFilter(json);
            });
    }

    handleOnSubmit(e) {
        console.log(e.target.value, 'handl?', this);
        this.searchByDescription(e.target.value);
    }

    render() {
        return (
            <div className="mdl-textfield mdl-js-textfield search-box">
                <input className="mdl-textfield__input" type="text" id="sample1" onChange={this.handleOnSubmit.bind(this)}/>
                <label className="mdl-textfield__label" htmlFor="sample1">Busca produto reembalado...</label>
            </div>
        )
    }
}

export default SearchBoxContainer