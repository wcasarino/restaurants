import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { size } from "lodash";

import { validateEmail } from "../../utils/helpers";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState([false, false]);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const defaultFormValues = () => {
    return { email: "", password: "", confirm: "" };
  };

  const [formData, setFormData] = useState(defaultFormValues());

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const registerUser = () => {
    if (!validateData()) {
      return;
    }

    console.log("va Bien");
  };

  const validateData = () => {
    setErrorConfirm("");
    setErrorEmail("");
    setErrorPassword("");
    let isValid = true;

    if (!validateEmail(formData.email)) {
      setErrorEmail("Debes ingresar un email válido.");
      isValid = false;
    }

    if (size(formData.password) < 6) {
      setErrorPassword(
        "Debes ingresar una contraseña de al menos 6 carácteres"
      );
      isValid = false;
    }

    if (formData.password !== formData.confirm) {
      //setErrorPassword("Las contraseñas no son iguales");
      setErrorConfirm("Las contraseñas no son iguales");
      isValid = false;
    }

    return isValid;
  };

  return (
    <View style={styles.form}>
      <Input
        placeholder="Ingresa tu email..."
        containerStyle={styles.input}
        onChange={(e) => onChange(e, "email")}
        keyboardType="email-address"
        errorMessage={errorEmail}
        defaultValue={FormData.email}
      />
      <Input
        placeholder="Ingresa tu contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={!showPassword[0]}
        onChange={(e) => onChange(e, "password")}
        errorMessage={errorPassword}
        defaultValue={FormData.password}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword[0] ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPassword([!showPassword[0], showPassword[1]])}
          />
        }
      />
      <Input
        placeholder="Confirma tu contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={!showPassword[1]}
        onChange={(e) => onChange(e, "confirm")}
        errorMessage={errorConfirm}
        defaultValue={FormData.confirm}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword[1] ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPassword([showPassword[0], !showPassword[1]])}
          />
        }
      />
      <Button
        title="Registrar nuevo Usuario"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => registerUser()}
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
  icon: {
    color: "#c1c1c1",
  },
});
