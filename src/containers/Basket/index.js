import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './styles.css';
import '../../ressources/Fonts/font.css';
import img1 from "../../ressources/images/hp-envy.jpg";
import img2 from "../../ressources/images/drone-r-falcon.jpg";
import img3 from "../../ressources/images/huawei-p20-lite.png";
import img4 from "../../ressources/images/nikon-d7500.jpg";

export default class Basket extends Component {
    static defaultProps = {
        displayBasket: false,
    };

    static propTypes = {
        displayBasket: PropTypes.bool,
    };

    render() {
        const { displayBasket } = this.props;

        return displayBasket ?
            <div className="BasketContainer">
                <div className="Basket">
                    <div className="BasketItem">
                        <div className="BasketImage">
                            <img className="BasketItemImage" src={img1} alt={img1} />
                        </div>
                        <div className="BasketCounter">
                            <div className="BasketOperation">-</div>
                            <div className="BasketCount">1</div>
                            <div className="BasketOperation">+</div>
                        </div>
                    </div>
                    <div className="BasketItem">
                        <div className="BasketImage">
                            <img className="BasketItemImage" src={img2} alt={img2} />
                        </div>
                        <div className="BasketCounter">
                            <div className="BasketOperation">-</div>
                            <div className="BasketCount">1</div>
                            <div className="BasketOperation">+</div>
                        </div>
                    </div>
                    <div className="BasketItem">
                        <div className="BasketImage">
                            <img className="BasketItemImage" src={img3} alt={img3} />
                        </div>
                        <div className="BasketCounter">
                            <div className="BasketOperation">-</div>
                            <div className="BasketCount">1</div>
                            <div className="BasketOperation">+</div>
                        </div>
                    </div>
                    <div className="BasketItem">
                        <div className="BasketImage">
                            <img className="BasketItemImage" src={img4} alt={img4} />
                        </div>
                        <div className="BasketCounter">
                            <div className="BasketOperation">-</div>
                            <div className="BasketCount">1</div>
                            <div className="BasketOperation">+</div>
                        </div>
                    </div>
                </div>
            </div>
            :
            null;
    }
}
