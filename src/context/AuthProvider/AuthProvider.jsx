import { useState } from "react";
import AuthContext from "../AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authInfo = { name: Khaled };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
