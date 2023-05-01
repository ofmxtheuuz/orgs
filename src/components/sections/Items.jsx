import {Text, StyleSheet} from "react-native";
import Fruit from "../Fruit";
import abobora from "../../../assets/frutas/Abóbora.png"
import batata from "../../../assets/frutas/Batata.png"
import brocolis from "../../../assets/frutas/Brócolis.png"
import pepino from "../../../assets/frutas/Pepino.png"
import tomate from "../../../assets/frutas/Tomate.png"



export default function Items() {

    const fruits = [
        {
            name: "Tomate",
            image: tomate
        },
        {
            name: "Brócolis",
            image: brocolis
        },
        {
            name: "Batata",
            image: batata
        },
        {
            name: "Pepino",
            image: pepino
        },
        {
            name: "Abóbora",
            image: abobora
        }
    ]
    
    return <>
        <Text style={styles.title}>Itens da cesta</Text>
        {fruits.map(({name, image}, i) => <Fruit key={i} name={name} photo={image}/>)}
    </>
}

const styles = StyleSheet.create({
    title: {
        marginTop: 25,
        fontSize: 20,
        fontWeight: "bold",
        color: "#464747"
    }
})