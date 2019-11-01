import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './styles.css';
import '../../ressources/Fonts/font.css';
import {isNilOrEmpty} from "../../helpers/helper";
import {bindActionCreators} from "redux";
import {
    selectProduct,
    unselectProduct,
    unselectAllProducts
} from "../../actions";
import {connect} from "react-redux";
import trash from "../../ressources/images/trash.svg";

class Basket extends Component {
    static defaultProps = {
        displayBasket: false,
    };

    static propTypes = {
        displayBasket: PropTypes.bool,
    };

    renderBasketItem = (item) => {
        const { productId, count, src, alt, price } = item;
        const totalItemPrice = (price*count).toFixed(2);

        return (
            <div className="BasketItem" key={productId}>
                <div className="BasketImage">
                    <img className="BasketItemImage" src={src} alt={alt} />
                </div>
                <div>
                    <div className="BasketCounter">
                        {count > 1
                            ? <div className="BasketOperation" onClick={() => this.props.unselectProduct(item)}>-</div>
                            : <div className="BasketItemTrash" onClick={() => {
                                if (window.confirm('êtes-vous sûr de vouloir supprimer cet élément ?')) this.props.unselectProduct(item)
                            }}>
                                <div>
                                    <img className="MenuItemIcon" src={trash} alt={trash} />
                                    <span className="icon-bin"></span>
                                </div>
                            </div>
                        }
                        <div className="BasketCount">{count}</div>
                        <div className="BasketOperation" onClick={() => this.props.selectProduct(item)}>+</div>
                        <div className="BasketItemPrice">{totalItemPrice} DH</div>
                    </div>
                    <hr/>
                </div>
            </div>);
    };

    getTotalPrice = () => {
        const { basketProducts } = this.props;
        let totalPrice = 0;
        basketProducts.forEach(element => {
            totalPrice += element.count *element.price;
        });

        return totalPrice.toFixed(2);
    };

    renderBasketItems = () => {
        const { basketProducts } = this.props;

        return (
            <div className="Basket">
                {!isNilOrEmpty(basketProducts) ? basketProducts.map(item => this.renderBasketItem(item)) : null}
                <div className="BasketTotalPrice">Prix total :
                    <div className="TotalPrice">{this.getTotalPrice()} DH</div>
                </div>
                <div className="BasketCheck">Valider la commande</div>
                <div className="BasketCancelation" onClick={() => this.props.unselectAllProducts()}>Annuler la commande</div>
            </div>
        );
    };

    render() {
        const { displayBasket } = this.props;

        return displayBasket ?
            <div className="BasketContainer">
                {this.renderBasketItems()}
            </div>
            :
            null;
    }
}

function mapStateToProps(state) {
    return {
        basketProducts: state.basketProducts
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
            {
                selectProduct: selectProduct,
                unselectProduct: unselectProduct,
                unselectAllProducts: unselectAllProducts
            },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);