import InputComponent from "../InputComponent";

const InputComponents = [
  { type: "text", placeholder: "Username", classType: "mb-3" },
  { type: "password", placeholder: "Password", classType: "mb-3" },
];

const LogInList = InputComponents.map((input, key) => {
  return <InputComponent {...input} key={key} />;
});

export default LogInList;
