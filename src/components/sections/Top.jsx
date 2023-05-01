import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import topo from "../../../assets/topo.png";
import React from "react";

const width = Dimensions.get('screen').width
export default function Top() {
    return <View>
            <Image style={styles.topoImage} source={topo}/>
            <Text style={styles.title}>Detalhes da cesta</Text>
        </View>
}

const styles = StyleSheet.create({
    topoImage: {
        position: "absolute",
        width: "100%",
        height: 578 / 768 * width
    },
    title: {
        fontSize: 16,
        marginTop: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#FFF"
    }
});