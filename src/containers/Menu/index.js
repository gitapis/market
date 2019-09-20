import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './styles.css';
import '../../ressources/Fonts/font.css';
import basket from '../../ressources/images/shopping.svg';
import connect from '../../ressources/images/log-in.svg';
import menu from '../../ressources/images/menu.svg';

export default class Menu extends Component {
    static defaultProps = {
        onClose: null,
        // shouldSwipeOut: false
    };
    static propTypes = {
        onClose: PropTypes.func,
        // shouldSwipeOut: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            shouldSwipeOut: false,
            isShown: false,
            value: ''
        };
    }

    handleClickMenu = () => {
        console.log(` ==> handleClickMenu`);
        this.setState(() => ({
            shouldSwipeOut: true,
            isShown: !this.state.isShown
        }));
    };

    handleOpenMenu = () => {
        this.setState(() => ({
            shouldSwipeOut: true
        }));
    };

    handleCloseMenu = () => {
        this.setState(() => ({
            shouldSwipeOut: false
        }));
    };

    renderContent(){
        const { shouldSwipeOut, isShown} = this.state;
        console.log(`isShown : ${isShown}`);
        console.log(`shouldSwipeOut : ${shouldSwipeOut}`);

        return shouldSwipeOut ? (
            <CSSTransition
                key="swipeLine"
                in={isShown}
                timeout={200}
                unmountOnExit
                classNames="Overlayer"
                onEnter={() => this.handleOpenMenu()}
                onExited={() => this.handleCloseMenu()}
            >
                <div className="MenuContent">
                    <div>{"Accueil"}</div>
                    <div>{"Tous les rayons"}</div>
                    <hr/>
                    <div>{"Mes commandes"}</div>
                    <div>{"Mon compte"}</div>
                    <hr />
                    <div>{"Mentions légales"}</div>
                    <div>{"Se connecter"}</div>
                </div>
            </CSSTransition>
        ) : null;
    }

    render() {
        return (
            <div className="container">
                <div className="MenuContainer">
                    <img className="Image1" src={menu} alt={menu} onClick={() => this.handleClickMenu()}/>
                    <span className="Title">MARKET</span>
                    <img className="Image2" src={connect} alt={connect} />
                    <img className="Image3" src={basket} alt={basket} />
                </div>
                <div>
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}
