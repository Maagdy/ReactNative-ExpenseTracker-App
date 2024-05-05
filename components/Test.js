import { StyleSheet, Text, View } from "react-native";

const Test = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.rab}> Test</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  rab: {
    textAlign: "center",
    flex: 1,
  },
});
