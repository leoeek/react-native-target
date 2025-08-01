import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/theme/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ondeline!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue[300],
    alignItems: "center",
    justifyContent: "center",
  },
});
