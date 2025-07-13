import { createContext, useContext, useReducer} from "react";
import { authReducer } from "../reducer";

const initialValue = {
  isAuthModalOpen: false,
  isDropDownModalOpen: false,
  username: localStorage.getItem("username") || "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
  accessToken: localStorage.getItem("token") || "",
  name: "",
  selectedTab: "login",
};


const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {

  const [
    {
      isAuthModalOpen,
      isDropDownModalOpen,
      username,
      email,
      password,
      number,
      accessToken,
      name,
      selectedTab,
      confirmPassword,
    },
    authDispatch,
  ] = useReducer(authReducer, initialValue);

  // useEffect(() => {
  //   // if (initialValue.username && initialValue.accessToken) {
  //   //   localStorage.setItem("username", initialValue.username);
  //   //   localStorage.setItem("accessToken",initialValue.accessToken);
  //   // } else {
  //   //   localStorage.removeItem("username");
  //   //   localStorage.removeItem("accessToken");
  //   // }
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthModalOpen,
        isDropDownModalOpen,
        username,
        email,
        password,
        number,
        accessToken,
        name,
        selectedTab,
        confirmPassword,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };