import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const itemWidth = width / 2 - 24; // 2 items per row with margins

const PortfolioItem = ({ item }) => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to detail screen with the item data
    navigation.navigate("PortfolioDetail", { item });
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={handlePress}
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

          <View style={styles.iconsContainer}>
            <TouchableOpacity
              style={styles.viewDetailsButton}
              onPress={handlePress}
            >
              <Text style={styles.viewDetailsText}>View Details</Text>
            </TouchableOpacity>
          </View>
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
    paddingHorizontal: 8,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  viewDetailsButton: {
    backgroundColor: "rgba(39, 174, 96, 0.9)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  viewDetailsText: {
    color: "#fff",
    fontWeight: "600",
  },
  technologiesList: {
    alignItems: "center",
    marginBottom: 12,
  },
  technologyItem: {
    color: "#fff",
    fontSize: 14,
    marginVertical: 2,
  },
});

export default PortfolioItem;
