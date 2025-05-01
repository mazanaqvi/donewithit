import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  TouchableHighlight,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";
import {
  useWindowDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const landscape = useDeviceOrientation();
  const isLandscape = landscape == "landscape";
  console.log("Device orientation is " + landscape);
  var dimensions = Dimensions.get("screen");

  let x = 10;
  x.toString();
  const handleTap = () => console.log("Image Tapped");
  const handlePareTap = (name) => console.log(name);
  const handleButtonAlert = () =>
    Alert.alert("Hello World ", "Bello", [
      { text: "Yes", onPress: () => handlePareTap("Yes") },
      { text: "No", onPress: () => handlePareTap("No") },
    ]);
  const handleButtonPrompt = () => {
    Alert.prompt("Hello World ", "Bello", (text) => console.log(text));
  };
  return (
    <SafeAreaView style={[styles.bainer]}>
      <View
        style={{
          backgroundColor: isLandscape ? "#fa9" : "#aff",
          width: dimensions.width,
          height: isLandscape ? dimensions.height : "20%",
        }}
      ></View>

      <Text
        numberOfLines={4}
        style={{ fontSize: 20, color: "#002" }}
        onPress={handleTap}
      >
        In the name of Almighty Allah
      </Text>
      <Button title="Alert" onPress={handleButtonAlert} />
      <Button
        title="Prompt"
        onPress={() =>
          Alert.prompt("Hello World ", "Bello", (text) => console.log(text))
        }
      />
      <TouchableHighlight onLongPress={handleTap}>
        <Image
          blurRadius={0.4}
          resizeMode="contain"
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/1/200/300",
          }}
        />
      </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bainer: {
    flex: 1,
    backgroundColor: "#fff",

    padding: 50,
  },
});
