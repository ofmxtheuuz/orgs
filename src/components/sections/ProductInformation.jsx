import {Text, StyleSheet, View, Image} from "react-native";
import farm from "../../../assets/logo.png"
import BuyButton from "../BuyButton";


export default function ProductInformation() {
    
    return <>
        <Text style={styles.title}>Cesta de verduras</Text>
        <View style={styles.farm}>
            <Image source={farm} style={styles.farmLogo} />
            <Text style={{color: "#464747"}}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.</Text>
        <Text style={styles.price}>R$ 40,00</Text>
        <BuyButton styles={{color: "#18c784"}}/>
    </>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#464747"
    },
    farm: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10, 
        marginVertical: 15
    },
    farmLogo: {
        width: 50,
        height: 50
    },
    description: {
        color: "#adafb3",
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        marginVertical: 16,
        fontSize: 25,
        fontWeight: "bold",
        color: "#18c784"
    },
    button: {
        color: "#18c784"
    }
})