import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, StyleSheet, View } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { fetchCoinData } from "../../actions";
import CryptoCard from './cryptoCard'

class CryptoContainer extends Component {

    componentDidMount(){
        this.props.fetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        console.log(crypto);
        return crypto.data.map((coin) => 
            <CryptoCard 
                key={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                rank={coin.rank}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        ) 
    }

    render() {

        if (this.props.crypto.isLoading) {
            return (
                <View>
                    <Spinner
                        visible={this.props.crypto.isLoading}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }

        return(
            <ScrollView contentContainerStyle={styles.Container}>
                {this.renderCoinCards()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        paddingBottom: 100,
        paddingTop: 55
    }
})

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