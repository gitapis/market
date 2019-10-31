import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './App.css';
import './ressources/Fonts/font.css';
import "react-datepicker/dist/react-datepicker.css";
import { isNilOrEmpty } from './helpers/helper';
import { getPrayerTimeByCity, getPrayerTime } from './API/actions';
// import Culture from './containers/Culture';

import ProductList from './containers/ProductList';
import { copyright, getValueByCulture, languages } from './helpers/strings';
import Menu from "./containers/Menu";
import Search from "./containers/Search";

class App extends Component {

    static defaultProps = {
        culture: languages.ar,
    };

    constructor(props) {
        super(props);
        this.state = {
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
    }

    handleDisplayBasket = () => {
        this.handleCloseAll();
        this.setState(() => ({
            isBasketDisplayed: !this.state.isBasketDisplayed,
            isMenuDisplayed: false,
        }));
        this.handleDisplayBlackBackground(!this.state.isBasketDisplayed);
    }

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

    renderBody = () => {
        const { isBlackBackgroundDisplayed } = this.state;

        return (
            <div className={isBlackBackgroundDisplayed ? "BlackBackground" : ""} onClick={isBlackBackgroundDisplayed ? () => this.handleCloseAll(): undefined}>
                <div className={isBlackBackgroundDisplayed ? "App-body disabledbutton" : "App-body"}>
                    <div className="App-Container">
                        <div className="App-block">
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
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

    render() {
        return (
            <div className="App">
                {this.renderHeader()}
                {this.renderBody()}
                {this.renderFooter()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        prayerTimeInformations: state.prayerTimeInformations,
        city: state.activeCity,
        country: state.activeCountry,
        culture: state.activeCulture,
    };
};

const mapDispatchToProps = dispatch => ({
    getPrayerTime: bindActionCreators(getPrayerTime, dispatch),
    getPrayerTimeByCity: bindActionCreators(getPrayerTimeByCity, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
