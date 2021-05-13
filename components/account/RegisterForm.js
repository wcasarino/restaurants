import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";

export default function RegisterForm() {
  return (
    <View style={styles.form}>
      <Input placeholder="Ingresa tu email..." containerStyle={styles.input} />
      <Input
        placeholder="Ingresa tu contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={true}
      />
      <Input
        placeholder="Confirma tu contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={true}
      />
      <Button
        title="Registrar nuevo Usuario"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
  input: {
    width: "100%",
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#442484",
  },
});
