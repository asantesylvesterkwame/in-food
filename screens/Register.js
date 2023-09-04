import { Image } from "expo-image";
import InFood from "../assets/InFood.png";
import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../globals/styles";
import React, { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
export default function Register() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback((formData) => {
    console.log(formData);
  }, []);

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
    },
    []
  );
  return (
    <SafeAreaProvider style={styles.viewArea}>
      <SafeAreaView>
        <View style={styles.mainCont}>
          <Image
            source={InFood}
            style={styles.logo}
          />

          <TextInput
            label="Email"
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="Enter your email..."
            onChangeText={onChangeField("email")}
            underlineColor="transparent"
            style={styles.textInput}
          />
          <TextInput
            secureTextEntry
            autoCompleteType="password"
            placeholder="Enter your password..."
            onChangeText={onChangeField("password")}
            style={styles.textInput}
            underlineColor="transparent"
          />
          <Button
            title="Submit"
            onPress={handleSubmit(onSubmit)}
            mode="contained"
            style={{
              width: "80%",
              textAlign: "center",
              backgroundColor: colors.secondary,
              borderWidth: 1,
              borderColor: colors.primary,
              borderRadius: 5,
            }}
            textColor={colors.primary}
            theme={{
              colors: {
                text: colors.primary,
              },
            }}
          >
            Register
          </Button>
          <GoogleSigninButton
            style={{ width: 48, height: 48 }}
            size={GoogleSigninButton.Size.Icon}
            color={GoogleSigninButton.Color.Dark}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  viewArea: {
    backgroundColor: colors.secondary,
  },
  mainCont: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: "100%",
    height: "50%",
  },
  textInput: {
    backgroundColor: "#f3f4f6",
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "80%",
    borderBottom: "transparent",
  },
});
