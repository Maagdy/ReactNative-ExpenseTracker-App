import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { authContext } from "../../store/AuthContext";
import { GlobalStyles } from "../../constants/style";
import IconButton from "../UI/IconButton";
const Settings = () => {
  const authCtx = useContext(authContext);

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerConatiner}>
        <Text style={styles.text}>Logout</Text>
        <Pressable>
          <IconButton
            icon="exit"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={authCtx.logout}
          />
        </Pressable>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.title}>coming Features ..</Text>
        <Text style={styles.features}>User Information</Text>
        <Text style={styles.features}>Expense image</Text>
        <Text style={styles.features}>Dark Mode</Text>
        <Text style={styles.features}>NEW Themes</Text>
      </View>
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.gray700,
  },
  innerConatiner: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  settingItem: {
    flexDirection: "column",
    paddingTop: 75,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  text: {
    paddingTop: 50,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  features: {
    paddingTop: 20,
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
