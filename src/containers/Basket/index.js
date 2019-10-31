import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './styles.css';
import '../../ressources/Fonts/font.css';
import img1 from "../../ressources/images/hp-envy.jpg";
import img2 from "../../ressources/images/drone-r-falcon.jpg";
import img3 from "../../ressources/images/huawei-p20-lite.png";
import img4 from "../../ressources/images/nikon-d7500.jpg";
import {isNilOrEmpty} from "../../helpers/helper";

export default class Basket extends Component {
    static defaultProps = {
        displayBasket: false,
    };

    static propTypes = {
        displayBasket: PropTypes.bool,
    };

    constructor(props){
        super(props);
        this.state = {
            BasketProducts: [
                {
                    ProductId: 1,
                    Count: 1,
                    Src: img1,
                    Alt: img1,
                    Price: 13718.99
                },
                {
                    ProductId: 2,
                    Count: 2,
                    Src: img2,
                    Alt: img2,
                    Price: 1539.99
                },
                {
                    ProductId: 3,
                    Count: 1,
                    Src: img3,
                    Alt: img3,
                    Price: 2499.99
                },
                {
                    ProductId: 4,
                    Count: 2,
                    Src: img4,
                    Alt: img4,
                    Price: 5299.99
                }
            ],
        };
    }

    handleOperation = (ProductId, Operation) => {
        var newBasketProducts = this.state.BasketProducts;

        if(Operation === "+") newBasketProducts.map(x => x.ProductId === ProductId ? x.Count = x.Count+1 : x);

        if(Operation === "-") newBasketProducts.map(x => x.ProductId === ProductId ? x.Count = x.Count-1 : x);

        this.setState(() => ({
            BasketProducts: newBasketProducts
        }));
    };

    spliceOperation = (index) => {
        var newBasketProducts = this.state.BasketProducts;

        newBasketProducts.splice(index,1)
        this.setState(() => ({
            BasketProducts: newBasketProducts
        }));
    }

    renderBasketItem = (item, index) => {
        const { ProductId, Count, Src, Alt, Price } = item;
        const totalItemPrice = (Price*Count).toFixed(2)

        return (
            <div className="BasketItem" key={ProductId}>
                <div className="BasketImage">
                    <img className="BasketItemImage" src={Src} alt={Alt} />
                </div>
                <div>
                    <div className="BasketCounter">
                        {Count > 1
                            ? <div className="BasketOperation" onClick={() => this.handleOperation(ProductId, "-")}>-</div>
                            : <div className="BasketOperation" onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this item?')) this.spliceOperation(index)
                            }}>-</div>
                        }
                        <div className="BasketCount">{Count}</div>
                        <div className="BasketOperation" onClick={() => this.handleOperation(ProductId,  "+")}>+</div>
                        <div className="BasketItemPrice">{totalItemPrice} DH</div>
                    </div>
                </div>
            </div>);
    }

    getTotalPrice = () => {
        const { BasketProducts } = this.state;
        var totalPrice = 0;
        BasketProducts.forEach((element, index) => {
            totalPrice += element.Count *element.Price;
        });

        return totalPrice.toFixed(2);
    }

    renderBasketItems = () => {
        const { BasketProducts } = this.state;

        if(isNilOrEmpty(BasketProducts)) return null;

        return (
            <div className="Basket">
                {BasketProducts.map((item, index) => this.renderBasketItem(item,index))}
                <div className="BasketTotalPrice">Prix total :
                    <div className="TotalPrice">{this.getTotalPrice()} DH</div>
                </div>
                <div className="BasketCheck">Valider la commande</div>
                <div className="BasketCancelation">Annuler la commande</div>
            </div>
        );
    }

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
