import { StyleSheet } from "react-native"

export const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F7EDE2',
        padding:22,
    },
    titulo:{
     marginTop:40,
     fontSize:35,
     fontWeight: 'bold'   
    },
    form: {
        flexDirection: 'row',
        width:'100%',
        marginTop:5,
    },
    input_text:{
        flex:1,
        height:60,
        fontSize:15,
        padding:12,
        borderRadius:10,
        marginLeft:10,
        backgroundColor: '#A0736F',
    },
    botao:{
        justifyContent:'center',
        alignItems: 'center', 
        height:60,    
        width:60,
        borderRadius:50,
        backgroundColor: '#E6C4A7',
        marginLeft:10,
  },   
   text_img:{ 
        justifyContent:'center',
        alignItems:'center',
        padding:12,   
        width:70,
        borderRadius:50,
        fontSize:35,
        backgroundColor: '#BE90B3',
        marginLeft:0,
},
    pp:{
        height:100,
        borderRadius:10,
        width:'100%',
},
   
  texto_botao:{
    fontSize:25,
  },
})