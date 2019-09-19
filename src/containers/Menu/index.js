import React, { Component } from 'react';

import './styles.css';
import '../../ressources/Fonts/font.css';
import basket from '../../ressources/images/shopping.svg';
import connect from '../../ressources/images/log-in.svg';
import menu from '../../ressources/images/menu.svg';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return (
            <div className="container">
                <div className="MenuContainer">
                    <img className="Image" src={menu} alt={menu} />
                    <span className="Title">MARKET</span>
                    <img className="Image" src={connect} alt={connect} />
                    <img className="Image" src={basket} alt={basket} />
                </div>
            </div>
        );
    }
}
