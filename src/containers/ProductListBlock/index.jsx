import React, { Component } from 'react';

import 'react-dropdown/style.css';
import './styles.css';
import '../../ressources/Fonts/font.css';
import Product from '../Product/index';
import nikon from '../../ressources/images/nikon-d7500.jpg';


export default class ProductListBlock extends Component {
    render() {
        return (
            <div>
                <Product src={nikon} alt={nikon} />
            </div>
        );
    }
}

