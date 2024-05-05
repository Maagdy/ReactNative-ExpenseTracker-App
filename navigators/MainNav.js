import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import ManageExpenses from "../screens/ManageExpenses";
import { GlobalStyles } from "../constants/style";
import BottomNavigator from "./BottomTabsNav";
// import { createStackNavigator } from "@react-navigation/stack";
// import "react-native-gesture-handler";

// import ManageExpenses from "../screens/ManageExpenses";
// import { GlobalStyles } from "../constants/style";
// import BottomNavigator from "./BottomTabsNav";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="ExpensesOverview"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManageExpenses"
        component={ManageExpenses}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
