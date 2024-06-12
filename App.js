import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const ButtonCustom = ({ text, color }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: color,
      width: 150,
      height: 80,
     justifyContent: "center",
      alignItems: "center",
      borderRadius: 40,
      marginRight: 30,
      marginBottom: 30,
      shadowColor: "#000",
      shadowOffset: {
       width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}>
      <Text style={{
        fontsize: 20,
        fontSize: "#fff",
        textAlign: "center",
        fontWeight: "bold",
      }}>
       {text}
      </Text>
    </TouchableOpacity>
  )
}

const App= () => {
  return (
    <View style={{ 
      flex: 1,
     justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    }}>
      <Text style={{
        fontSize: 40,
        fontWeight: "bold",
       marginBottom: 30,
       color: "red",
      }}>
        SELAMAT DATANG
      </Text>
      <Image
        source={require('./assets/Awan.png')} 
        style={{ width: 150, height: 100, marginBottom: 20, borderRadius: 40 }} />
     <View style={{

      flexDirection: "row", // Mengubah "-" menjadi "row"
      justifyContent: "center",
      marginBottom: 50,
}}>
        <ButtonCustom color="ff5e78"text="MASUK"/>  
        <ButtonCustom color="#6699ff" text="MENDAFTAR"/>
      </View>
    </View>
  )
}

export default App;
