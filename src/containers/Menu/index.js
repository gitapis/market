import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './styles.css';
import '../../ressources/Fonts/font.css';
import basket from '../../ressources/images/shopping.svg';
import close from '../../ressources/images/x.svg';
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
        //console.log(`shouldSwipeOut : ${shouldSwipeOut}`);

        return (
            <CSSTransition
                key="swipeLine"
                in={isShown}
                timeout={300}
                unmountOnExit
                classNames="Overlayer"
            >
                <div className="MenuContent">
                    <div>
                        <div className="CloseContainer">
                            <img className="close" src={close} alt={close} onClick={() => this.handleClickMenu()} />
                        </div>
                        <div className="MenuItems">
                            <div className="MenuItem">{"Accueil"}</div>
                            <div className="MenuItem">{"Tous les rayons"}</div>
                            <hr/>
                            <div className="MenuItem">{"Mes commandes"}</div>
                            <div className="MenuItem">{"Mon compte"}</div>
                            <hr />
                            <div className="MenuItem">{"Mentions légales"}</div>
                            <div className="MenuItem">{"Se connecter"}</div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        );
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
