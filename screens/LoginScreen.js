import { StyleSheet } from "react-native";
import { useContext } from "react";
import { Alert } from "react-native";
import { useState } from "react";

import { authContext } from "../store/AuthContext";
import AuthContent from "../components/Auth/AuthContent";
import LoadingAuthOverlay from "../components/Auth/LoadingAuthOverlay";
import { Login } from "../util/Auth";

//   const [isAuthenticating , setIsAuthenticating] = useState(false);

//   const authCtx = useContext(authContext);

//   async function loginHandler ({email,password}){
//       setIsAuthenticating(true);
//       try {
//         const token = await Login(email , password);
//         authCtx.authenticate(token)
//       } catch (error){
//         Alert.alert("Authentication Failed!" , "Could not log you in ,  Please check your email or password.");
//         setIsAuthenticating(false);
//       }
//   }

//   if(isAuthenticating){
//       return <LoadingAuthOverlay message="Logging in..." />
//   }

//   return <AuthContent isLogin onAuthenticate={loginHandler} />;
// }
const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(authContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await Login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
    } finally {
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingAuthOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;

const styles = StyleSheet.create({
  Container: {
    textAlign: "center",
    color: "red",
    fontSize: 24,
  },
});
