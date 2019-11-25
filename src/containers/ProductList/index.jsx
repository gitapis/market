import { bindActionCreators } from 'redux';
import {connect} from "react-redux";
import React, { Component } from 'react';

import 'react-dropdown/style.css';
import './styles.css';
import '../../ressources/Fonts/font.css';
import Product from '../Product/index';
import {isNilOrEmpty} from "../../helpers/index";
import { getAllProducts } from '../../API/actions';
import Spinner from "../../components/Loader";
import {LoadingType} from "../../components/RequestStatus";

class ProductList extends Component {

    constructor(props){
        super(props);
        this.state = {
            isProductsLoaded: false
        }
    }


    componentDidMount() {
        this.props.getAllProducts();
    };

    render() {
        const {productsInformations} = this.props.productsInformations;
        const {informations, fetchingStatus} = productsInformations;

        if(fetchingStatus === LoadingType || isNilOrEmpty(informations)) return (<div className="FormContainer">
            <Spinner />
        </div>);

        return (
            <div>
                {   !isNilOrEmpty(informations) ?
                    informations.map(x => !isNilOrEmpty(x) ?
                        <Product product={x} key={x.productId} />
                        :
                        null
                    )
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productsInformations: state.productsInformations,
    };
};

const mapDispatchToProps = dispatch => ({
    getAllProducts: bindActionCreators(getAllProducts, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);