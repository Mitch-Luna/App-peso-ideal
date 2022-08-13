import { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [Peso, setPeso] = useState("");
  const [Estatura, setEstatura] = useState("");

  const Formula = () => {
    const peso = parseFloat(Peso)
    const estatura = parseFloat(Estatura)/100

    const formula = peso / (estatura * estatura);

    if (formula < 18.5) {
      alert("🍩Estas bajo de peso🍖");
    }
     else if (formula >= 18.5 && formula < 24.9){
      alert("💪 Tu peso es normal 💪");

    }else if (formula >= 25.0) {
      alert("🏋️‍♀️Tienes Sobre peso🏋️‍♀️");
    }
  };

  return (
    <View
      style={{
        borderColor: "white",
        borderWidth: 2,
        marginTop: 35,
        marginHorizontal: 290,
        padding: 55,
        paddingTop: 20,
        borderRadius: 2,
        backgroundColor: "#FFFF90",
        width: 750,
        height: 500,

      }}
    >
      <View
        style={{
          borderColor: "black",
          borderWidth: 2,
          marginTop: 35,
          marginHorizontal: 60,
          padding: 108,
          paddingTop: 20,
          borderRadius: 2,
          backgroundColor: "white",
          width: 550,
          height: 350,
        }}
      >

        <Text><b><h2 style={{ backgroundColor: "rgb(236, 124, 98)", fontFamily: 'sans-serif', textAlign: 'center' }}>Calculadora IMC</h2></b></Text>
        <Text><h3>Ingrese Su Peso en Kilogramos</h3></Text>
        <TextInput
          style={{
            alignContent:'center',
            fontFamily: "calibri",
            fontSize: 20,
            borderColor: "black",
            borderWidth: 2,
            width: 200,
            backgroundColor: "rgb(114, 190, 235)",
          }}
          value={Peso}
          onChangeText={(Peso) => setPeso(Peso)}
          placeholder='Peso' 
          keyboardType= "numeric"
        />

        <Text><h3>Ingrese Su Estatura en Centimetros</h3></Text>
        <TextInput
          style={{
            fontFamily: "calibri",
            fontSize: 20,
            borderColor: "black",
            borderWidth: 2,
            width: 200,
            backgroundColor: "rgb(114, 190, 235)",
            marginBottom: 40,

          }}
          value={Estatura}
          onChangeText={(Estatura) => setEstatura(Estatura)}
          placeholder='Estatura' 
          keyboardType="numeric"
        />
        <Button
        color= "rgb(228, 119, 182)"
        title="Guardar" onPress={Formula} />

      </View>

    </View>

  );
}