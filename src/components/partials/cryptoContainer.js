import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { fetchCoinData } from "../../actions";

class CryptoContainer extends Component {

    componentDidMount(){
        this.props.fetchCoinData();
    }

    render() {
        return(
            <View>
                <Text>Container</Text>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        crypto: state.crypto
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchCoinData: () =>  dispatch(fetchCoinData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer)