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

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#5af",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      <TouchableHighlight onLongPress={() => {}}>
        <Image
          blurRadius={0.4}
          resizeMode="strech"
          source={{
            width: 400,
            height: 300,
            uri: "https://picsum.photos/id/1/200/300",
          }}
        />
      </TouchableHighlight>

      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: "#daf",
          width: 100,
          height: 100,
          top: -20,
        }}
      ></View>
      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: "#afa",
          width: 100,
          height: 100,
          top: 20,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#11f",
          width: 100,
          height: 200,
          top: 40,
          position: "absolute",
        }}
      ></View>
    </View>
  );
}
