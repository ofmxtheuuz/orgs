import {Text, TouchableOpacity, StyleSheet} from "react-native";

export default function BuyButton() {
    return <TouchableOpacity style={styles.button} >
        <Text style={{color: "#f0f7f5",textAlign: "center",fontWeight: "bold",letterSpacing: 1}}>Comprar</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        borderRadius: 6,
        backgroundColor: "#24a674"
    }
})