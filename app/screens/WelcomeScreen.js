import React from "react";
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/bg.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/logo.png")}
          />
          <Text style={styles.tagline}>Converting ideas into ideas.</Text>
        </View>
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <View style={styles.loginButton}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              Linking.openURL("https://www.xrossapps.com/");
            }}
          >
            <Text style={styles.buttonText}>Visit Web </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerButton}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("Details")}
          >
            <Text style={styles.buttonText}>Details </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 0.9,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 100,
  },
  tagline: {
    fontSize: 26,
    fontWeight: "900",
    color: "#F44009C9",

    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 26,
    fontWeight: "900",
    color: "#FAF7F7C9",
    alignSelf: "center",

    paddingVertical: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#EA6D3CFF",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#31190AFF",
  },
});

export default WelcomeScreen;
