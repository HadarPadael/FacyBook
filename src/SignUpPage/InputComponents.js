import InputComponent from "./InputComponent";

const InputComponents = [
  { type: "password", placeholder: "Password" },
  { type: "password", placeholder: "Password validation" },
  { type: "text", placeholder: "Nickname" },
  { type: "text", placeholder: "Username" },
];

  const InputComponentsList = InputComponents.map((input, key) => {
    return <InputComponent {...input} key={key} />;
  });

export default InputComponentsList;
