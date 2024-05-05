import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const authContext = createContext({
  token: "",
  isAuthenticated: false,
  userId: "",
  authenticate: (data) => {},
  logout: () => {},
  fetchLocalData: () => {},
});

export default function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  //QSenodbuxmVnjfKg76LTplPojMu1
  //QSenodbuxmVnjfKg76LTplPojMu1
  async function authenticate(data) {
    await AsyncStorage.setItem("userId", data.localId);
    await AsyncStorage.setItem("token", data.idToken);
    setAuthToken(data.idToken);
    setUserId(data.localId);
  }

  async function fetchLocalData() {
    const storedUserId = await AsyncStorage.getItem("userId");
    const storedToken = await AsyncStorage.getItem("token");
    if (storedToken && storedUserId) {
      setAuthToken(storedToken);
      setUserId(storedUserId);
    }
  }

  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    userId: userId,
    isAuthenticated: !!authToken,
    fetchLocalData: fetchLocalData,
    authenticate: authenticate,
    logout: logout,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
