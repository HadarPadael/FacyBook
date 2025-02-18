import InputComponent from "../InputComponent";

function CreateSignUpList({
  setPassword,
  setValidPassword,
  setUsername,
  setNickname,
}) {
  const InputComponents = [
    {
      type: "password",
      placeholder: "Password",
      classType: "col-md-6",
      onChange: (e) => setPassword(e.target.value),
    },
    {
      type: "password",
      placeholder: "re-enter password",
      classType: "col-md-6",
      onChange: (e) => setValidPassword(e.target.value),
    },
    {
      type: "text",
      placeholder: "Nickname",
      classType: "col-md-6",
      onChange: (e) => setNickname(e.target.value),
    },
    {
      type: "text",
      placeholder: "Username",
      classType: "col-md-6",
      onChange: (e) => setUsername(e.target.value),
    },
  ];

  const SignUpList = InputComponents.map((input, key) => {
    return <InputComponent {...input} key={key} />;
  });

  return <div className="row g-3">{SignUpList}</div>;
}

export default CreateSignUpList;
