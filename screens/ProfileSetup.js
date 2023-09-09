import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { Form } from "react-hook-form";
import { TextInput } from "react-native-paper";
import { useForm } from "react-hook-form";
import React, { useEffect, useCallback } from "react";
import { Button } from "react-native-paper";
import { colors } from "../globals/styles";


const Stack = createStackNavigator();

export default function ProfileSetup({ navigation }) {
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
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.mainCont}>
          <View>
            <Text>Profile Setup</Text>
          </View>
          <View>
            <Form>
              <TextInput
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
                Log in
              </Button>
            </Form>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
