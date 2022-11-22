import { View, Text, StyleSheet, FlatList, Image, Linking } from 'react-native'
import React, { Component, useEffect , useState} from 'react'
import { CurrentRenderContext } from '@react-navigation/native'
import Profile from '../Fragments_Home/Profile';
import initFireBase from '../../Config';




export default function List(props) {
  const [data,setData] = useState([]);
  

  // get service of database
  const database = initFireBase.database();
  //get ref of profiles
  const ref_profils = database.ref("profils");
  // ecouteur sur la bdd , kif tetbadl f firebase , tetbadl lena
  // kif thot value , yaani ay modifications fi ref heki
  //kif thot child_added , yaani ken l elmnt li tzed jdid
  // kif thot child_changed , yaani l elmnt eli tbdl jdid
 

  useEffect(()=>{
    data[0]=null;
    ref_profils.on("value",(dataSnapshot)=>{
      const dd=dataSnapshot.val();
      setData(
        Object.keys(dd).map((val)=>{
          return {
            nom : dd[val].nom ,
            prenom : dd[val].prenom,
            pseudo : dd[val].pseudo
          }
        })
      );
      /*dataSnapshot.forEach((profil)=>{
        data.push(profil.val());
        console.log(profil);
      });*/
      
    });   
  },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste Des Profils</Text>
      <FlatList data={data} renderItem={({ item }) =>
      (
        <View style={styles.view}>
          <Image style={{ width: 55, height: 55 }} source={require("../avatar.png")} onPress={() => { }}></Image>
          <View style={{ alignItems: "flex-start", flex: 1, padding: 8 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }} onPress={() => props.navigation.replace("chat")}>{item.pseudo}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.nom}   {item.prenom}</Text>
          </View>
        </View>
      )
      }> </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignment: CurrentRenderContext,
    justifyContent: "flex-start",
  },
  title: {
    padding: 15,
    alignItems: "center",
    fontSize: 28,
    fontWeight: "bold"
  },
  view: {
    alignItems: "flex-start",
    flexDirection: "row",
    height: 62,
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
    borderColor: "gray",
    margin: 5,
    width: "95%"
  }
}
)