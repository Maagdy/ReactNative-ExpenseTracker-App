import { StyleSheet, Text, View } from "react-native";

const Test1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.rab}> Test</Text>
    </View>
  );
};

export default Test1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  rab: {
    textAlign: "center",
    flex: 1,
  },
});
