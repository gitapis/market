import React, { Component } from "react";
import {connect} from "react-redux";

import './styles.css';
import {object, number, string} from "prop-types";

class Authentication extends Component {

    static propTypes = {
        authProvider: object,
    };

    static defaultProps = {
        authProvider: null
    };

    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit() {

    };

    render() {

        return (
            <div className="Submit" onClick={this.handleSubmit}>
                S'inscrire
            </div>
        );
    };
}

function mapStateToProps(state) {
    return { };
}

export default connect(mapStateToProps)(Authentication);