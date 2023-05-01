import {Image, StyleSheet, Text, View} from "react-native";

export default function Fruit({name, photo}) {
    return <>
        <View style={styles.fruit}>
            <Image source={photo} style={styles.fruitImage} />
            <Text style={{color: "#464747"}}>{name}</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    fruit: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingVertical: 15,
        borderBottomWidth: 0.6,
        borderBottomColor: "#c3cdde"
    },
    fruitImage: {
        width: 40,
        height: 40
    },
})