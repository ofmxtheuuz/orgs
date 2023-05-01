import React from "react"
import {ScrollView} from 'react-native';
import Top from "./components/sections/Top"
import ProductInformation from "./components/sections/ProductInformation";
import Items from "./components/sections/Items";
import Container from "./components/Container";


export default function Cest() {
  return (
    <ScrollView>
        <Top />
        <Container>
            <ProductInformation />
            <Items />
        </Container>
    </ScrollView>
  )
}
