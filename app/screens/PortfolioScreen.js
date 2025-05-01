import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  StatusBar,
} from "react-native";
import { portfolioItems } from "../data/PortfolioData";
import PortfolioItem from "./PortfolioItem";

const { width } = Dimensions.get("window");
const itemWidth = width / 2 - 24; // 2 items per row with margins

const PortfolioScreen = () => {
  const renderPortfolioItem = ({ item }) => {
    return <PortfolioItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          My <Text style={styles.titleSpan}>Portfolio</Text>
        </Text>
      </View>

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  titleContainer: {
    position: "relative",
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    zIndex: 2,
  },
  titleSpan: {
    color: "#27AE60",
  },
  bgText: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 60,
    color: "rgba(0, 0, 0, 0.07)",
    fontWeight: "bold",
    zIndex: 1,
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
  // Removed redundant styles that are now in the PortfolioItem component
});

export default PortfolioScreen;
