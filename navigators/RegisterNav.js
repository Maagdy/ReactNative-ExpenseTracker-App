// import { createStackNavigator } from "@react-navigation/stack";
// import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import SignupScreen from "../screens/SignupScreen";
import { GlobalStyles } from "../constants/style";
import LoginScreen from "../screens/LoginScreen";

// import SignupScreen from "../screens/SignupScreen";
// import { GlobalStyles } from "../constants/style";

const Stack = createStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default RegisterNavigator;
