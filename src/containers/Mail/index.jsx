import React, { Component } from "react";
import {connect} from "react-redux";

import './styles.css';

class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: 'Anas', email: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value})
    }

    handleSubmit() {
        const { basketProducts } = this.props;
        let totalPrice = 0;
        basketProducts.forEach(element => {
            totalPrice += element.count *element.price;
        });
        const {email} = this.state;

        // eslint-disable-next-line
        if (!/^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
            alert("Vous avez entré une adresse email invalide !")
        } else {
            if (totalPrice <= 0) {
                alert("Le montant de votre commande est invalide !");
            } else {
                const serviceId = 'Support';
                const templateId = 'template2';
                const html = `<div>Le montant de votre commande est : <b>${totalPrice} DH</b></div>`;
                const variables = {
                    message_html: html,
                    from_name: 'Market support service',
                    reply_to: email,
                    to_name: this.state.name,
                    email_to: email
                };

                this.sendFeedback(serviceId, templateId, variables);
            }
        }

    }

    sendFeedback (serviceId, templateId, variables) {
        console.log(this.state);
        window.emailjs.send(
            serviceId, templateId, variables
        ).then(res => {
            console.log('Email successfully sent!', res)
        })
            .catch(err => {
                console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
            })
    }

    render() {
        return (
            <form>
                <div className="FormContainer">
                    Entrer votre adresse mail: <input className="Email" type="email" onChange={this.handleChange} required/>
                </div>
                <br/>
                <div className="Submit" onClick={this.handleSubmit}>
                    Valider votre commande
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        basketProducts: state.basketProducts
    };
}

export default connect(mapStateToProps)(Mail);