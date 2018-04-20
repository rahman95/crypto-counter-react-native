import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { coinImageBaseUrl } from "../../utils/constants"

const CryptoCard = ({ name, symbol, rank, price_usd, percent_change_24h, percent_change_7d }) => {
    console.log(`${coinImageBaseUrl}${symbol}.png`)
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: `${coinImageBaseUrl}${symbol.toLowerCase()}.png` }}
            />
            <Text>{name}</Text>
            <Text>{symbol}</Text>
            <Text>{rank}</Text>
            <Text>{price_usd}</Text>
            <Text>{percent_change_24h}</Text>
            <Text>{percent_change_7d}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 50,
        width: 50
    },
    title: {
        fontWeight: 'bold'
    }
})

export default CryptoCard;