import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { coinImageBaseUrl } from "../../utils/constants"

const CryptoCard = ({ name, symbol, price_usd, percent_change_24h, percent_change_7d }) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: `${coinImageBaseUrl}${symbol.toLowerCase()}.png` }}
                />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.topContainer}>
                    <Text>                 
                        <Text style={styles.title}>{name}</Text>
                        <Text> - </Text>
                        <Text>{symbol}</Text>
                    </Text>
                    <Text style={styles.price}>${price_usd}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <Text>
                        <Text style={styles.title}>24 Hours: </Text>
                        <Text style={percent_change_24h < 0 ? styles.negativeVal : styles.positiveVal }> {percent_change_24h}%</Text>
                    </Text>
                    <Text>
                        <Text style={styles.title}>7 Days: </Text>
                        <Text style={percent_change_7d < 0 ? styles.negativeVal : styles.positiveVal }> {percent_change_7d}%</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
        borderBottomColor: "#d3d3d3",
        borderBottomWidth: 1,
        padding: 20
    },
    imageContainer: {
        width: '10%'
    },
    image: {
        height: 32,
        width: 32
    },
    infoContainer: {
        paddingLeft: '5%',
        paddingRight: '5%',
        width: '90%',
        flexDirection: 'column'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold'
    },
    price: {
        fontWeight: 'bold',
        color: '#007AFF'
    },
    positiveVal: {
        color: '#27ae60'
    },
    negativeVal: {
        color: '#c0392b'
    }
})

export default CryptoCard;