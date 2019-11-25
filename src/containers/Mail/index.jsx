import React, { Component } from "react";
import {connect} from "react-redux";

import './styles.css';
import Spinner from "../../components/Loader";

class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            name: 'Anas',
            email: '',
            isSent: false,
            isLoading : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({email: event.target.value})
    };

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
                const html = `<div>Le montant de votre commande est : <b>${totalPrice.toFixed(2)} DH</b></div>`;
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
    };

    dispatchLoading = () => {
        this.setState({
            isLoading : true
        });
    };

    getOperationStatus = () => {
        this.setState({
            isSent: !this.state.isSent,
            isLoading : false
        });
    };

    sendFeedback (serviceId, templateId, variables) {
        this.dispatchLoading();

        window.emailjs.send(
            serviceId, templateId, variables
        ).then(res => {
            console.log('Email successfully sent!', res);
            this.getOperationStatus();
        })
            .catch(err => {
                console.error('Oh well, you failed. Here some thoughts on the error that occured:', err);
                this.getOperationStatus();
            })
    };

    render() {
        const { isSent, isLoading } = this.state;

        if(isLoading) {
            return (<div className="FormContainer">
                <Spinner />
            </div>)
        }

        if(isSent) {
            return (<div>
                <p>Un email de validation de la commande a été envoyée avec succès !</p>
                <p>Merci de patienter un moment, le temps qu'un agent prend en charge votre commande.</p>
            </div>)
        }

        return(<form>
                <div>
                    <input className="Email" type="email" onChange={this.handleChange} placeholder="Email" required/>
                </div>
                <br/>
                <div className="Submit" onClick={this.handleSubmit}>
                    Enoyer
                </div>
                <div><p>Vous allez recevoir un email de validation de votre commande</p></div>
            </form>)
    };
}

function mapStateToProps(state) {
    return {
        basketProducts: state.basketProducts
    };
}

export default connect(mapStateToProps)(Mail);