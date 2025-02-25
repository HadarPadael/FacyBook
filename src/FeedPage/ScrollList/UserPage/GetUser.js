import userAPI from "../../../API/userAPI";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext";

export default async function GetUser( name, setUser, setIsother ) {
  const { user } = useContext(AuthContext);
  let otherUser = null;

  if (name != null) {
    otherUser = await userAPI.getUser(name);
    setUser(otherUser);
    setIsother(true);
  } else {
    setUser(user);
    setIsother(false);
  }
}
