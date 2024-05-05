import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import "react-native-gesture-handler";

import ExpensesContextProvider from "./store/expenses-context";
import AuthContextProvider, { authContext } from "./store/AuthContext";
import LoadingAuthOverlay from "./components/Auth/LoadingAuthOverlay";
import MainNavigator from "./navigators/MainNav";
import RegisterNavigator from "./navigators/RegisterNav";

function App() {
  const authCtx = useContext(authContext);
  const [checkingAuthState, setIsCheckingAuthState] = useState(true);

  async function fetchLocalData() {
    await authCtx.fetchLocalData();
    setIsCheckingAuthState(false);
  }

  useEffect(() => {
    fetchLocalData();
  }, []);

  if (checkingAuthState) {
    return <LoadingAuthOverlay />;
  }

  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" />
        {authCtx.isAuthenticated ? <MainNavigator /> : <RegisterNavigator />}
      </NavigationContainer>
    </>
  );
}

export default () => {
  return (
    <ExpensesContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ExpensesContextProvider>
  );
};
