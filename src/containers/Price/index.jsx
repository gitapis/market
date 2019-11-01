import React, { Component } from 'react';
import { bool, number, string } from 'prop-types';

import './styles.css';
import '../../ressources/Fonts/font.css';
import { isNilOrEmpty } from '../../helpers/index';

export default class Price extends Component {
    static propTypes = {
        isOldPrice: bool,
        color: string,
        price: number,
    };

    static defaultProps = {
        isOldPrice: false,
        color: 'black',
        price: 0
    };

    renderPrice = () => {
        const { color, isOldPrice, price } = this.props;

        const decimalPrice = price.toString().split(".");
        const firstPart = decimalPrice[0];
        const secondPart = decimalPrice[1];

        const priceStyle = { color, margin: 0};
        const oldPriceStyle = { ...priceStyle, textDecoration: 'line-through'};

        if(isOldPrice) return (
            <div className="priceBlock">
                <h3 style={oldPriceStyle}>{firstPart} </h3>
                <h6 style={oldPriceStyle}>{secondPart}</h6>
                <h3 style={oldPriceStyle}> DH</h3>
            </div>
        );

        return (
            <div className="priceBlock">
                <h2 style={priceStyle}>{firstPart} </h2>
                <h5 style={priceStyle}>{secondPart}</h5>
                <h2 style={priceStyle}> DH</h2>
            </div>
        );
    };

    render() {
        const { price } = this.props;

        if(isNilOrEmpty(price)) return null;

        return this.renderPrice();
    }
}
