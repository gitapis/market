import React, { Component } from 'react';

import 'react-dropdown/style.css';
import './styles.css';
import '../../ressources/Fonts/font.css';
import Product from '../Product';
import { products } from '../../helpers/strings';
import {isNilOrEmpty} from "../../helpers/helper";

export default class ProductList extends Component {

    render() {
        return (
            <div>
                {   !isNilOrEmpty(products) ?
                    products.map(x => !isNilOrEmpty(x) ?
                        <Product product={x} key={x.productId} />
                        :
                        null
                    )
                    : null
                }
            </div>
        );
    }
}

