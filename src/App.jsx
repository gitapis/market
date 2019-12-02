import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { createBrowserHistory } from "history";

import './App.css';
import './ressources/Fonts/font.css';
import "react-datepicker/dist/react-datepicker.css";
import { isNilOrEmpty } from './helpers';
import { getAllProducts, getPrayerTimeByCity, getPrayerTime } from './API/actions';
import Mail from './containers/Mail';
// import Culture from './containers/Culture';

import ProductList from './containers/ProductList/index';
import { copyright, getValueByCulture, languages } from './helpers/strings';
import Menu from "./containers/Menu/index";
import Search from "./containers/Search/index";
import Account from "./containers/Account";
import Login from "./containers/Login";
import {PrivateRoute} from "./containers/PrivateRoute";

class App extends Component {

    static defaultProps = {
        culture: languages.ar,
    };

    constructor(props) {
        super(props);
        this.state = {
            isProductsFetched: false,
            isBlackBackgroundDisplayed: false,
            isMenuDisplayed: false,
        };
    }

    handleClick = (city) => {
        const { country, getPrayerTime } = this.props;
        const date = new Date();

        if (isNilOrEmpty(city)) return null;
        getPrayerTime(city.key, country.key, 2, date.getMonth() + 1, date.getFullYear());
    };

    handleDisplayMenu = () => {
        this.handleCloseAll();
        this.setState(() => ({
            isMenuDisplayed: !this.state.isMenuDisplayed,
            isBasketDisplayed: false,
        }));
        this.handleDisplayBlackBackground(!this.state.isMenuDisplayed);
    };

    handleDisplayBasket = () => {
        this.handleCloseAll();
        this.setState(() => ({
            isBasketDisplayed: !this.state.isBasketDisplayed,
            isMenuDisplayed: false,
        }));
        this.handleDisplayBlackBackground(!this.state.isBasketDisplayed);
    };

    handleDisplayBlackBackground = (state) => {
        this.setState(() => ({
            isBlackBackgroundDisplayed: state,
        }));
    };

    handleCloseAll = () => {
        this.setState(() => ({
            isMenuDisplayed: false,
            isBlackBackgroundDisplayed: false,
            isBasketDisplayed: false
        }));
    };

    renderHeader = () => {
        // return (
        //     <header className="App-header">
        //         <Culture />
        //     </header>
        // );

        return (
            <header className="App-header">
                <Menu displaySideMenu={this.state.isMenuDisplayed}
                      displayBasket={this.state.isBasketDisplayed}
                      onClose={this.handleDisplayMenu}
                      onOpenBasket={this.handleDisplayBasket}/>
                <Search onSearchClick={this.handleCloseAll}/>
            </header>
        );
    };

    renderFooter = () => {
        const { culture } = this.props;

        return (
            <footer>
                <div className="copyright">
                    {getValueByCulture(copyright, culture)}
                </div>
            </footer>
        );
    };

    renderBaskettBody = () => {
        return (
            <div>
                <h2>Basket</h2>
                <Mail />
            </div>)
    };

    renderDisconnectBody = () => <h2>Se déconnecter</h2>;

    renderLegalNoticeBody = () => <h2>Mentions légales</h2>;

    renderMyAccountBody = () => <h2>Mon compte</h2>;

    renderOrdersBody = () => <h2>Mes commandes</h2>;

    renderCategoriesBody = () => <h2>Toutes les catégories</h2>;

    renderHomeBody = () => {
        return (
            <div className="App-Container">
                <div className="App-block">
                    <ProductList />
                </div>
            </div>
        );
    };

    renderSubscribeBody = () => {
        return (
            <div style={ {'width' : '100%'}}>
                <h2>S'inscrire</h2>
                <Account />
            </div>);
    };

    renderLoginBody = () => {
        return (
            <div style={ {'width' : '100%'}}>
                <h2>Se connecter</h2>
                <Login />
            </div>);
    };

    renderPrivateRoute = (route, isHeaderEnabled, bodyContent, isFooterEnabled) => {
        const { isBlackBackgroundDisplayed } = this.state;

        return (
            <PrivateRoute path={route}>
                <div className="App">
                    {isHeaderEnabled ? this.renderHeader() : null}
                    <div className={isBlackBackgroundDisplayed ? "BlackBackground" : ""} onClick={isBlackBackgroundDisplayed ? () => this.handleCloseAll(): undefined}>
                        <div className={isBlackBackgroundDisplayed ? "App-body disabledbutton" : "App-body"}>
                            {bodyContent}
                        </div>
                    </div>
                    {isFooterEnabled ? this.renderFooter() : null}
                </div>
            </PrivateRoute>
        );
    };

    renderRoute = (route, isHeaderEnabled, bodyContent, isFooterEnabled) => {
        const { isBlackBackgroundDisplayed } = this.state;

        return (
            <Route path={route}>
                <div className="App">
                    {isHeaderEnabled ? this.renderHeader() : null}
                    <div className={isBlackBackgroundDisplayed ? "BlackBackground" : ""} onClick={isBlackBackgroundDisplayed ? () => this.handleCloseAll(): undefined}>
                        <div className={isBlackBackgroundDisplayed ? "App-body disabledbutton" : "App-body"}>
                            {bodyContent}
                        </div>
                    </div>
                    {isFooterEnabled ? this.renderFooter() : null}
                </div>
            </Route>
        );
    };

    render() {
        const history = createBrowserHistory();

        return (
            <Router history={history}>
                <Switch>
                    {this.renderPrivateRoute("/market/basket", true, this.renderBaskettBody(),true)}
                    {this.renderPrivateRoute("/market/categories", true, this.renderCategoriesBody() ,true)}
                    {this.renderPrivateRoute("/market/disconnect", true, this.renderDisconnectBody(),true)}
                    {this.renderPrivateRoute("/market/legalNotice", true, this.renderLegalNoticeBody() ,true)}
                    {this.renderPrivateRoute("/market/myAccount", true, this.renderMyAccountBody()  ,true)}
                    {this.renderPrivateRoute("/market/orders", true, this.renderOrdersBody() ,true)}
                    {this.renderRoute("/market/subscribe", true, this.renderSubscribeBody() ,true)}
                    {this.renderRoute("/market/login", true, this.renderLoginBody() ,true)}
                    {this.renderRoute("/market", true, this.renderHomeBody() ,true)}
                    {this.renderRoute("*", true, this.renderHomeBody() ,true)}
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.activeCity,
        country: state.activeCountry,
        culture: state.activeCulture,
        prayerTimeInformations: state.prayerTimeInformations,
        productsInformations: state.productsInformations,
    };
};

const mapDispatchToProps = dispatch => ({
    getAllProducts: bindActionCreators(getAllProducts, dispatch),
    getPrayerTime: bindActionCreators(getPrayerTime, dispatch),
    getPrayerTimeByCity: bindActionCreators(getPrayerTimeByCity, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
