export default class UserPageHandler{

  const navigate = useNavigate();
  let user2, otherUser;
  const handleClick = async () => {
    user2 = await userAPI.getUser(name);
    if (user.nickname === user2.nickname) {
      otherUser = false;
    } else {
      otherUser = true;
    }
    navigate("/UserPage", { state: { user: user2 }, otherUser });
  };
}