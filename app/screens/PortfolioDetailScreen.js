import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const PortfolioDetailScreen = ({ route, navigation }) => {
  // Get the item from navigation params
  const { item } = route.params;

  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{item.title}</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <View style={styles.heroImageContainer}>
          <Image
            source={item.image}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* Project Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.projectTitle}>{item.title}</Text>

          {/* Description - This would come from your data */}
          <Text style={styles.description}>
            {item.description ||
              "This project showcases my skills in developing high-quality applications. It demonstrates my ability to create intuitive user interfaces, implement complex functionality, and deliver exceptional user experiences."}
          </Text>

          {/* Technologies Used */}
          {item.technologies && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Technologies Used</Text>
              <View style={styles.techContainer}>
                {item.technologies.map((tech, index) => (
                  <View key={index} style={styles.techBadge}>
                    <Text style={styles.techText}>{tech}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Features - This would come from your data */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Features</Text>
            <View style={styles.featuresList}>
              <View style={styles.featureItem}>
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color="#27AE60"
                  style={styles.featureIcon}
                />
                <Text style={styles.featureText}>Intuitive user interface</Text>
              </View>
              <View style={styles.featureItem}>
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color="#27AE60"
                  style={styles.featureIcon}
                />
                <Text style={styles.featureText}>Responsive design</Text>
              </View>
              <View style={styles.featureItem}>
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color="#27AE60"
                  style={styles.featureIcon}
                />
                <Text style={styles.featureText}>Performance optimized</Text>
              </View>
              {item.type === "app" && (
                <View style={styles.featureItem}>
                  <Ionicons
                    name="checkmark-circle"
                    size={20}
                    color="#27AE60"
                    style={styles.featureIcon}
                  />
                  <Text style={styles.featureText}>
                    Cross-platform compatibility
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Links Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>View Project</Text>
            <View style={styles.linksContainer}>
              {item.type === "website" && (
                <TouchableOpacity
                  style={styles.linkButton}
                  onPress={() => openLink(item.url)}
                >
                  <Ionicons name="globe" size={20} color="#fff" />
                  <Text style={styles.linkButtonText}>Visit Website</Text>
                </TouchableOpacity>
              )}

              {item.type === "app" && item.googlePlayUrl && (
                <TouchableOpacity
                  style={[styles.linkButton, { backgroundColor: "green" }]}
                  onPress={() => openLink(item.googlePlayUrl)}
                >
                  <Ionicons
                    name="logo-google-playstore"
                    size={20}
                    color="#fff"
                  />
                  <Text style={styles.linkButtonText}>Google Play</Text>
                </TouchableOpacity>
              )}

              {item.type === "app" && item.appStoreUrl && (
                <TouchableOpacity
                  style={[styles.linkButton, { backgroundColor: "black" }]}
                  onPress={() => openLink(item.appStoreUrl)}
                >
                  <Ionicons name="logo-apple-appstore" size={20} color="#fff" />
                  <Text style={styles.linkButtonText}>App Store</Text>
                </TouchableOpacity>
              )}

              {item.type === "youtube" && (
                <TouchableOpacity
                  style={[styles.linkButton, { backgroundColor: "#ff0000" }]}
                  onPress={() => openLink(item.youtubeUrl)}
                >
                  <Ionicons name="logo-youtube" size={20} color="#fff" />
                  <Text style={styles.linkButtonText}>Watch Demo</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Year and Client Info - This would come from your data */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#27AE60",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  heroImageContainer: {
    width: width,
    height: width * 0.75,
    backgroundColor: "#ddd",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  projectTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  techBadge: {
    backgroundColor: "#e1f5fe",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  techText: {
    color: "#0277bd",
    fontWeight: "500",
  },
  featuresList: {
    marginTop: 8,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  featureIcon: {
    marginRight: 8,
  },
  featureText: {
    fontSize: 16,
    color: "#444",
  },
  linksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  linkButton: {
    flexDirection: "row",
    backgroundColor: "#27AE60",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  linkButtonText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 8,
  },
  metaInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  metaInfoItem: {
    flex: 1,
  },
  metaInfoLabel: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  metaInfoValue: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});

export default PortfolioDetailScreen;
