import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../context/user-context";
const Logout = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    auth.logout();
    history.replace("/");
  }, [auth, history]);

  return null;
};

export default Logout;
