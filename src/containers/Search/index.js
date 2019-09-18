import React, { Component } from 'react';

import './styles.css';
import '../../ressources/Fonts/font.css';
import search from '../../ressources/images/search.png';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="textContainer">
                        <img className="img" src={search} alt={search} />
                        <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <input style={{ display: 'none'}} type="submit" value="Submit" />
            </form>
        );
    }
}
