import { Pressable, StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/style";

function AuthButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.AuthButton, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.AuthButtonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default AuthButton;

const styles = StyleSheet.create({
  AuthButton: {
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: GlobalStyles.colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  AuthButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
