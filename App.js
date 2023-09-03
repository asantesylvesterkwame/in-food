import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import OnBoarding from "./assets/infoodOnBoardnew.jpg";
import { colors } from "./globals/styles";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.ScreenCont}>
          <View style={styles.imageContainer}>
            <Image
              source={OnBoarding}
              style={styles.img}
              contentFit="cover"
              transition={1000}
            />
          </View>
          <View
            style={{ gap: 20, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.headText}>Order Anything Here!</Text>
            <Text style={styles.subText}>
              And watch us deliver as fast as flash
            </Text>
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              raised
              theme={{ roundness: 3 }}
              style={{
                width: 250,
                textAlign: "center",
                backgroundColor: colors.primary,
              }}
            >
              Get Started
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 400,
    height: 500,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderWidth: 0,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  headText: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 24,
  },
  subText: {
    textAlign: "center",
    // fontWeight: "900",
    fontSize: 12,
  },
  ScreenCont: {
    flexDirection: "column",
    gap: 50,
  },
});
