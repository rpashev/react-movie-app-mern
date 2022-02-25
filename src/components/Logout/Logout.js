import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../context/user-context";
const Logout = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    auth.logout();
    navigate("/", { replace: true });
  }, [auth, navigate]);

  return null;
};

export default Logout;
