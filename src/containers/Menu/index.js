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
                    <img className="Image1" src={menu} alt={menu} />
                    <span className="Title">MARKET</span>
                    <img className="Image2" src={connect} alt={connect} />
                    <img className="Image3" src={basket} alt={basket} />
                </div>
            </div>
        );
    }
}
