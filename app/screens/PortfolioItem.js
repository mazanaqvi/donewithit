import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const itemWidth = width / 2 - 24; // 2 items per row with margins

const PortfolioItem = ({ item }) => {
  const [isPressed, setIsPressed] = useState(false);

  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <View style={styles.portfolioItem}>
        <Image
          source={item.image}
          style={styles.itemImage}
          resizeMode="cover"
        />

        <View style={[styles.hoverItems, { opacity: isPressed ? 1 : 0 }]}>
          <Text style={styles.itemTitle}>{item.title}</Text>

          {item.type === "technology" && (
            <View style={styles.technologiesList}>
              {item.technologies.map((tech, index) => (
                <Text key={index} style={styles.technologyItem}>
                  • {tech}
                </Text>
              ))}
            </View>
          )}

          {item.type === "website" && (
            <View style={styles.iconsContainer}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => openLink(item.url)}
              >
                <Ionicons name="globe" size={24} color="white" />
              </TouchableOpacity>
            </View>
          )}

          {item.type === "app" && (
            <View style={styles.iconsContainer}>
              {item.googlePlayUrl && (
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => openLink(item.googlePlayUrl)}
                >
                  <Ionicons
                    name="logo-google-playstore"
                    size={24}
                    color="white"
                  />
                </TouchableOpacity>
              )}

              {item.appStoreUrl && (
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => openLink(item.appStoreUrl)}
                >
                  <Ionicons
                    name="logo-apple-appstore"
                    size={24}
                    color="white"
                  />
                </TouchableOpacity>
              )}
            </View>
          )}

          {item.type === "youtube" && (
            <View style={styles.iconsContainer}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => openLink(item.youtubeUrl)}
              >
                <Ionicons name="logo-youtube" size={24} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  portfolioItem: {
    width: itemWidth,
    height: 180,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    position: "relative",
  },
  itemImage: {
    width: "100%",
    height: "100%",
  },
  hoverItems: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    // Will be controlled by the isPressed state
  },
  itemTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
  },
  technologiesList: {
    alignItems: "center",
  },
  technologyItem: {
    color: "#fff",
    fontSize: 14,
    marginVertical: 2,
  },
});

export default PortfolioItem;
