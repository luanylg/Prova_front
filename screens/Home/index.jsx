import { Text, View, TextInput, TouchableOpacity, FlatList, Image } from "react-native"
import Card from "../../component/Card"
import { estilos } from "./styles"

export default function Home(){

    const lista = ['teste', 'luany', 'bruno', 'chico', 'yasmmin', 'ket', 'lulis']

    return(
        <View style = {estilos.container}>
            <View >
                <Image source={require('../../assets/PAPEL-DE-PAREDE.png')}style={estilos.pp}/>
            </View>
        <Text style= {estilos.titulo}></Text>
        <View style = {estilos.form}>
        <TouchableOpacity style = {estilos.botom}>
        <Text style = {estilos.text_img}>
                👸🏼
                </Text>
            </TouchableOpacity>

                <TextInput style = {estilos.input_text}/>

               <TouchableOpacity style = {estilos.botao}>
                <Text style = {estilos.texto_botao}>
                🔎
                </Text>
               </TouchableOpacity>
            </View>

            <FlatList 
                data={lista}
                keyExtractor={item => item}
                renderItem={({item})=>(
                    <Card key={item} name={item} />
                )}
                showsVerticalScrollIndicador={false}
            />
        </View>
        )
    }