import React, { Component } from 'react';

class ListRefurbisheds extends Component {
    render () {
        const { refurbisheds } = this.props;
        console.log(this.props);

        return (
            <table className="mdl-data-table mdl-shadow--2dp search-table-results">
                <thead>
                    <tr>
                        <th className="mdl-data-table__cell--non-numeric">Id do Produto</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Com desconto</th>
                    </tr>
                </thead>
                <tbody>
                { refurbisheds &&
                    refurbisheds.map((refurbished, index) =>
                    <tr key={index}>
                        <td className="mdl-data-table__cell--non-numeric">
                            {refurbished.product}</td>
                        <td>{refurbished.description}</td>
                        <td>{refurbished.original_price}</td>
                        <td>{refurbished.discount_price}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        );
    }
}

export default ListRefurbisheds;