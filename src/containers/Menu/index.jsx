import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './styles.css';
import '../../ressources/Fonts/font.css';
import atSign from '../../ressources/images/at-sign.svg';
import home from '../../ressources/images/home.svg';
import basket from '../../ressources/images/shopping.svg';
import close from '../../ressources/images/x.svg';
import connect from '../../ressources/images/log-in.svg';
import list from '../../ressources/images/list.svg';
import login from '../../ressources/images/login.svg';
import logout from '../../ressources/images/logout.svg';
import orders from '../../ressources/images/shopping-bag.svg';
import menu from '../../ressources/images/menu.svg';
import user from '../../ressources/images/user.svg';
import Basket from '../Basket/index';

export default class Menu extends Component {
    static defaultProps = {
        displaySideMenu: false,
        displayBasket: false,
        isConnected: true,
        onClose: () => {},
        onOpenBasket: () => {}
    };

    static propTypes = {
        displaySideMenu: PropTypes.bool,
        displayBasket: PropTypes.bool,
        isConnected: PropTypes.bool,
        onClose: PropTypes.func,
        onOpenBasket: PropTypes.func
    };

    constructor(props){
        super(props);
        this.state = {
            isBasketDisplayed: false,
        };
    }

    handleDisplayBasket = () => {
        this.setState(() => ({
            isBasketDisplayed: !this.state.isBasketDisplayed
        }));

        this.props.onOpenBasket();
    };

    renderContent(){
        const { displaySideMenu, isConnected } = this.props;

        return (
            <CSSTransition
                key="swipeLine"
                in={displaySideMenu}
                timeout={200}
                unmountOnExit
                classNames="Overlayer"
            >
                <div className="MenuContent">
                    <div>
                        <div className="CloseContainer">
                            <img className="close" src={close} alt={close} onClick={() => this.props.onClose()} />
                        </div>
                        <div className="MenuItems">
                            <div className="MenuItem">
                                <img className="MenuItemIcon" src={home} alt={home} />
                                {"Accueil"}
                            </div>
                            <div className="MenuItem">
                                <img className="MenuItemIcon" src={list} alt={list} />
                                {"Tous les rayons"}
                            </div>
                            <hr/>
                            <div className="MenuItem">
                                <img className="MenuItemIcon" src={orders} alt={orders} />
                                {"Mes commandes"}
                            </div>
                            <div className="MenuItem">
                                <img className="MenuItemIcon" src={user} alt={user} />
                                {"Mon compte"}
                            </div>
                            <hr />
                            <div className="MenuItem">
                                <img className="MenuItemIcon" src={atSign} alt={atSign} />
                                {"Mentions légales"}
                            </div>
                            {isConnected ?
                                <div className="MenuItem">
                                    <img className="MenuItemIcon" src={login} alt={login} />
                                    {"Se connecter"}
                                </div>
                                :
                                <div className="MenuItem">
                                    <img className="MenuItemIcon" src={logout} alt={logout} />
                                    {"Se déconnecter"}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </CSSTransition>
        );
    }

    render() {
        const { displayBasket, onClose } = this.props;

        return (
            <div className="container">
                <div className="MenuContainer">
                    <img className="Image1" src={menu} alt={menu} onClick={() => onClose()}/>
                    <span className="Title">MARKET</span>
                    <img className="Image2" src={connect} alt={connect} />
                    <img className="Image3" src={basket} alt={basket} onClick={() => this.handleDisplayBasket()} />
                </div>
                <Basket displayBasket={displayBasket}/>
                <div>
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}
