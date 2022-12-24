import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { css } from './assets/css/Css';
import MapView from 'react-native-maps'; 
import * as Location from 'expo-location';
import { useState, useEffect, useRef } from 'react';
import database from './firebase/firebase';
import {getDatabase,ref, onValue, set} from 'firebase/database';

function EnviaLocalizacao(dado1, dado2){
  const db = getDatabase();
  const reference = ref(db, 'Find_Bus_Motorista/');
  set(reference, {
    Latitude: dado1,
    Longitude:dado2,
  })
}
var localizacao = ['','']
//var n = 1
//var n2= 2
export default function App() {

  const [origin, setOrigin] = useState(null);
  const mapEl = useRef (null);


  useEffect( () => {
      (async function(){
          const {status} = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted'){
              let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
              setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
              })
              //n=n2+n
              //n2=n+n2
              localizacao = [location.coords.latitude, location.coords.longitude]
            } else {
              throw new Error('Location permission not granted');
            }
      })();
  });

  return (
    <View style={css.tela}>
      {/* <MapView style={css.mapa}
          initialRegion={origin}
          showsUserLocation={true}
          zoomControlEnabled={false}
          zoomEnabled={true}
          loadingEnabled={false}
          ref={mapEl}
        >
     
        </MapView> */}
      
        <Text
        style={{textAlign:'center', fontSize:20, color:'#347fcaff',fontFamily:'Roboto',
        fontWeight:'bold'}}>
          Tela Principal - Compartilhar Localização</Text>
      <Image
      source={require('./assets/img/MapaMogiGuacu.png')}
      style={{marginTop:20, marginBottom:5, width:400,height:570}}
      />
        <View style={css.procura}>
          <TouchableOpacity style={{
            backgroundColor:'#87EB37',
            marginLeft:10,
            marginTop:20,
             padding:20,
              width:170,
               height:150,
              borderRadius:10,
            justifyContent:'center',
          alignItems:'center',
        borderColor:'black',
      borderWidth:1}} 
      onPress={EnviaLocalizacao(localizacao[0],localizacao[1])}
          placeholder="Ativar Localização">
            <Text style={{fontSize:22}}>Compartilhar Localização</Text>
            </TouchableOpacity>
            <TouchableOpacity      
            style={{
            backgroundColor:'#EA4201',
            marginLeft:20,
             padding:20,
              width:170,
              marginTop:20,
               height:150,
              borderRadius:10,
            justifyContent:'center',
          alignItems:'center',
        borderColor:'black',
      borderWidth:1}}
          placeholder="Ativar Localização">
            <Text style={{fontSize:22, padding:0}}>Parar de Compartilhar</Text>       
            </TouchableOpacity>
      </View>
    </View>
  );
}