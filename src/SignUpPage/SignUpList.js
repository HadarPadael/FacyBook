import InputComponent from "../InputComponent";

const InputComponents = [
  { type: "password", placeholder: "Password", classType: "col-md-6" },
  {
    type: "password",
    placeholder: "Validate password",
    classType: "col-md-6",
  },
  { type: "text", placeholder: "Nickname", classType: "col-md-6" },
  { type: "text", placeholder: "Username", classType: "col-md-6" },
];

const SignUpList = InputComponents.map((input, key) => {
  return <InputComponent {...input} key={key} />;
});

export default SignUpList;
