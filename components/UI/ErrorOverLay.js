import { Text, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/style";
import Button from "./Button";

const ErrorOverlay = ({ message, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An Error ocurred</Text>
      <Textv style={styles.text}>{message}</Textv>
      <Button onPress={onPress}>Okay</Button>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: "white",
    marginBottom: 8,
    fontWeight: "bold",
  },
  title: {
    fontSize: "20",
    textAlign: "center",
  },
});
