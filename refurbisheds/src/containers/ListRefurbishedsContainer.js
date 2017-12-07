import React, { Component } from 'react';

import ListRefurbisheds from '../components/ListRefurbisheds';

class ListRefurbishedsContainer extends Component {
  
    componentWillMount() {
        console.log('fetching all products');
        fetch('http://localhost:8081/api/refurbisheds')
            .then( (response) => {
                return response.json();
            })
            .then( (json) => {
                console.log('willMount-> ', json.refurbisheds);
                this.setState({
                    refurbisheds: json.refurbisheds
                })
            });
    }

    componentWillReceiveProps() {
        console.log('willReceive', this.props.filtered);
        this.setState({
            refurbisheds: this.props.filtered
        });
    }

    render() {
        return (
            <div>
                <ListRefurbisheds {...this.state} />
            </div>
        );
    }
}

export default ListRefurbishedsContainer;