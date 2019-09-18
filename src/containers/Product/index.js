import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
import React, { Component } from 'react';
import Rating from 'react-star-rating-component';

import './styles.css';
import '../../ressources/Fonts/font.css';
import { isNilOrEmpty } from '../../helpers/helper';
import { bool, exact, number, string } from 'prop-types';
import Price from '../Price';

export default class Product extends Component {
    static propTypes = {
        alt: string,
        description: exact({
            isHidden : bool,
            message: string
        }),
        oldPrice: number,
        price: number,
        rating: number,
        src: string,
        title: string
    };

    static defaultProps = {
        alt: "",
        description: {
            isHidden : true,
            message: ""
        },
        oldPrice: 0,
        price: 0,
        rating: 3,
        src: "",
        title: ""
    };

    renderOldPrice = () => {
        const { oldPrice, price } = this.props;
        if(isNilOrEmpty(oldPrice) || oldPrice === 0) return null;

        if(oldPrice <= price) return null;

        return <Price color="grey" isOldPrice price={oldPrice} />;
    };

    renderPrice = () => {
        const { price } = this.props;

        return <Price color="red" price={price} />;
    };

    renderTitle = () => {
        const { title } = this.props;

        return <h4 style={{ margin : '0px'}}>{title}</h4>;
    };

    renderRating = () => {
        const { rating } = this.props;

        return (
            <div>
                <Rating
                    name="rate1"
                    starCount={5}
                    value={rating}
                />
            </div>
        )
    };

    renderDescription = () => {
        const { description } = this.props;

        if(!description) return null;

        const { isHidden, message } = description;
        if(isHidden) return null;

        return (
            <CollapsibleComponent>
                <CollapsibleHead className="collapsibleHead">Voir le descriptif complet</CollapsibleHead>
                <CollapsibleContent className="collapsibleContent">
                    <p>{message}</p>
                </CollapsibleContent>
            </CollapsibleComponent>
        );
    };

    render() {
        const { alt, src } = this.props;

        if(isNilOrEmpty(src)) return null;

        return (
            <div style={{
                display: 'inline-flex',
                flexFlow: 'row wrap'
            }}>
                <div>
                    {this.renderTitle()}
                    <img src={src} alt={alt} className="imageCSS"/>
                    {this.renderRating()}
                </div>
                <div>
                    <div style={{ display: 'inline-grid' }}>
                        {this.renderOldPrice()}
                        {this.renderPrice()}
                    </div>
                    <div className="description">
                        {this.renderDescription()}
                    </div>
                </div>
            </div>
        );
    }
}