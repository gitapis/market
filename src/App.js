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
        };
    }

    handleClick = (city) => {
        const { country, getPrayerTime } = this.props;
        const date = new Date();

        if (isNilOrEmpty(city)) return null;
        getPrayerTime(city.key, country.key, 2, date.getMonth() + 1, date.getFullYear());
    };

    handleDisplayBlackBackground = () => {
        this.setState(() => ({
            isBlackBackgroundDisplayed: !this.state.isBlackBackgroundDisplayed
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
                <Menu displaySideMenu={this.state.isBlackBackgroundDisplayed} onClose={this.handleDisplayBlackBackground} />
                <Search/>
            </header>
        );
    };

    renderBody = () => {
        return (
            <div className="App-body">
                <div className="App-Container">
                    <div className="App-block">
                        <ProductList />
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

    renderBlackBackground = () => {
        const { isBlackBackgroundDisplayed} = this.state;

        if(isBlackBackgroundDisplayed) return <div className="BlackBackground" onClick={() => this.handleDisplayBlackBackground()}></div>;

        return null;
    }
    render() {
        return (
            <div className="App">
                {this.renderBlackBackground()}
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
