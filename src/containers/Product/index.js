import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Rating from 'react-star-rating-component';

import './styles.css';
import '../../ressources/Fonts/font.css';
import { isNilOrEmpty } from '../../helpers/helper';
import { exact, number, string } from 'prop-types';
import Price from '../Price';
import {selectProduct} from "../../actions";

class Product extends Component {
    static propTypes = {
        product: exact({
            alt: string,
            description: string,
            oldPrice: number,
            price: number,
            productId: number,
            rating: number,
            src: string,
            title: string
        })
    };

    static defaultProps = {
        product: {
            alt: "",
            description: "",
            oldPrice: 0,
            price: 0,
            productId: 0,
            rating: 3,
            src: "",
            title: ""
        }
    };

    renderOldPrice = () => {
        const { oldPrice, price } = this.props.product;
        if(isNilOrEmpty(oldPrice) || oldPrice === 0) return null;

        if(oldPrice <= price) return null;

        return <Price color="grey" isOldPrice price={oldPrice} />;
    };

    renderPrice = () => {
        const { price } = this.props.product;

        return <Price color="red" price={price} />;
    };

    renderTitle = () => {
        const { title } = this.props.product;

        return <h4 style={{ margin : '0px'}}>{title.toUpperCase()}</h4>;
    };

    renderRating = () => {
        const { rating } = this.props.product;

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
        const { description } = this.props.product;

        if(!description) return null;

        return (
            <CollapsibleComponent className="description">
                <CollapsibleHead className="collapsibleHead">Voir le descriptif complet</CollapsibleHead>
                <CollapsibleContent className="collapsibleContent">
                    <p>{description}</p>
                </CollapsibleContent>
            </CollapsibleComponent>
        );
    };

    render() {
        const { product } = this.props;
        const { alt, src } = product;

        if(isNilOrEmpty(src)) return null;

        return (
            <div className="Product">
                <div style={{
                    width: '100%'
                }}>
                    <div style={{
                        display: 'inline-flex',
                        flexFlow: 'row wrap',
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
                            <div>
                                {this.renderDescription()}
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => this.props.selectProduct(product)}>
                    <div className="addButton">
                        Ajouter au panier
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        basketProducts: state.basketProducts
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectProduct: selectProduct }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);