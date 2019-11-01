import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './styles.css';
import '../../ressources/Fonts/font.css';

export default class Popup extends Component {
    static defaultProps = {
        displayPopup: false,
    };

    static propTypes = {
        displayPopup: PropTypes.bool,
    };

    render() {
        const { displayPopup } = this.props;

        return displayPopup ?
            <div className="PopupContainer">
                <div className="Popup"></div>
            </div>
            :
            null;
    }
}
