import React, { Component } from 'react';

import './styles.css';
import '../../ressources/Fonts/font.css';
import basket from '../../ressources/images/Basket.png';
import connect from '../../ressources/images/Connect.png';
import menu from '../../ressources/images/Menu.png';

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
                    <span className="Title">SOKKONA</span>
                    <img className="Image" src={connect} alt={connect} />
                    <img className="Image" src={basket} alt={basket} />
                </div>
            </div>
        );
    }
}
