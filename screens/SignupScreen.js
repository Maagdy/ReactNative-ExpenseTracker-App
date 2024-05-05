import LoadingAuthOverlay from "../components/Auth/LoadingAuthOverlay";
import { useState, useContext } from "react";
import { Alert } from "react-native";

import { authContext } from "../store/AuthContext";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/Auth";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(authContext);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const data = await createUser(email, password);
      // console.log(data);
      authCtx.authenticate(data);
      Alert.alert("Created Successfully", "Enjoy your experience !");
    } catch (error) {
      // console.log(JSON.stringify(error))
      Alert.alert(
        "Authentication Failed!",
        "Please check your email or password , or try agian later."
      );
    } finally {
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingAuthOverlay message="Creating new user ..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
