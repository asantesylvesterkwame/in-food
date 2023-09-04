import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function Login() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Auth</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
