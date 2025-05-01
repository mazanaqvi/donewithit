import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  StatusBar,
  SafeAreaView,
  LinearGradient,
} from "react-native";
import { useFonts } from "expo-font"; // Optional for custom fonts

function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/logo.png")}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Ali Hamza</Text>
          <Text style={styles.tagline}>Converting ideas into innovation</Text>
          <Text style={styles.description}>
            Flutter Developer | Mobile & Web Specialist | UI/UX Enthusiast
          </Text>
        </View>

        <View style={styles.decorationBar} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.websiteButton}
          onPress={() => {
            Linking.openURL("https://mazanaqvi.github.io/portfolio/");
          }}
        >
          <Text style={styles.buttonText}>Visit Website</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.portfolioButton}
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={styles.buttonText}>View Portfolio</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF91",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
  },
  textContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 32,
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3C8151",
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  decorationBar: {
    width: 60,
    height: 4,
    backgroundColor: "#3C8151",
    marginTop: 30,
    borderRadius: 2,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  websiteButton: {
    backgroundColor: "#3C8151",
    borderRadius: 10,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#3C8151",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  portfolioButton: {
    backgroundColor: "#222",
    borderRadius: 10,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default WelcomeScreen;
