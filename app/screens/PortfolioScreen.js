import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { portfolioItems } from "../data/PortfolioData";
import PortfolioItem from "./PortfolioItem";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const itemWidth = width / 2 - 24;

const PortfolioScreen = ({ navigation }) => {
  const renderPortfolioItem = ({ item }) => {
    return <PortfolioItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* Header with back button and title */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          My <Text style={styles.titleSpan}>Portfolio</Text>
        </Text>
        <View style={styles.placeholderView} />
      </View>

      <View style={styles.container}>
        <Text style={styles.portText}>
          Here is some of my work that I've done during Last 5 Years for Web,
          Mobile and Desktop Apps and the backend servers.
        </Text>

        <FlatList
          data={portfolioItems}
          renderItem={renderPortfolioItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  titleSpan: {
    color: "#27AE60",
  },
  placeholderView: {
    width: 40, // Same width as back button for balanced layout
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  portText: {
    textAlign: "center",
    marginBottom: 24,
    color: "#555",
    lineHeight: 22,
  },
  row: {
    justifyContent: "space-between",
  },
});

export default PortfolioScreen;
