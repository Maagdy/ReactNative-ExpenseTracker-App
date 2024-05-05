// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import "react-native-gesture-handler";

// import AllExpenses from "../screens/AllExpenses";
// import RecentExpenses from "../screens/RecentExpenses";
// import { GlobalStyles } from "../constants/style";
// import IconButton from "../components/UI/IconButton";
// import Settings from "../components/ManageExpenses/Settings";

// const bottomTabs = createBottomTabNavigator();

// const BottomNavigator = () => {
//   return (
//     <bottomTabs.Navigator
//       screenOptions={({ navigation }) => ({
//         headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
//         headerTintColor: "white",
//         tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
//         tabBarActiveTintColor: GlobalStyles.colors.accent500,
//         headerRight: () => (
//           <IconButton
//             icon="add"
//             size={24}
//             color="white"
//             onPress={() => navigation.navigate("ManageExpenses")}
//           />
//         ),
//       })}
//     >
//       <bottomTabs.Screen
//         name="RecentExpenses"
//         component={RecentExpenses}
//         options={{
//           title: "Recent Expenses",
//           tabBarLabel: "Recent",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="hourglass" size={size} color={color} />
//           ),
//         }}
//       />
//       <bottomTabs.Screen
//         name="AllExpenses"
//         component={AllExpenses}
//         options={{
//           title: "All Expenses",
//           tabBarLabel: "All",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="calendar" size={size} color={color} />
//           ),
//         }}
//       />
//       <bottomTabs.Screen
//         name="Settings"
//         component={Settings}
//         options={{
//           headerRight: null,
//           title: "Settings",
//           tabBarLabel: "Settings",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="settings" size={size} color={color} />
//           ),
//         }}
//       />
//     </bottomTabs.Navigator>
//   );
// };

// export default BottomNavigator;

// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import { GlobalStyles } from "../constants/style";
// import IconButton from "../components/UI/IconButton";
// import AllExpenses from "../screens/AllExpenses";
// import RecentExpenses from "../screens/RecentExpenses";
// import Settings from "../components/ManageExpenses/Settings";

import { React } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/style";
import IconButton from "../components/UI/IconButton";
import AllExpenses from "../screens/AllExpenses";
import Settings from "../components/ManageExpenses/Settings";
import RecentExpenses from "../screens/RecentExpenses";

const BottomTabs = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: () => (
          <IconButton
            icon="add"
            size={24}
            color="white"
            onPress={() => navigation.navigate("ManageExpenses")}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          headerRight: null,
          title: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
