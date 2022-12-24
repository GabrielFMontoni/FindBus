import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const css = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
    mapa: {
      height: '70%',
      //flex: 3,
      marginBottom: 20,  
    },
    procura: {
     flex: 1,
     flexDirection:'row',
      padding: 20,
      position:'relative', 
      width: '100%',
     },
    // preco:{
    //   backgroundColor: 'black',
    //   paddingVertical: 15,
    //   paddingHorizontal: 10,
    //   borderRadius: 10,
    //   margin: 30,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    // info_preco:{
    //   color: '#ffe680',
    //   fontWeight: 'bold',
    //   fontSize: 20,
    // },
    // info_distancia: {
    //   fontSize: 20,
    //   fontWeight: 'bold',
    //   textAlign: "center",
    // }
  });

  export {css};