import InputComponent from "../InputComponent";

function CreateLogInList({ setUsername, setPassword }) {
    
  const InputComponents = [
    {
      type: "text",
      placeholder: "Username",
      classType: "mb-3",
      onChange: (e) => setUsername(e.target.value),
    },
    {
      type: "password",
      placeholder: "Password",
      classType: "mb-3",
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  const LogInList = InputComponents.map((input, key) => {
    return <InputComponent {...input} key={key} />;
  });

  return <div> {LogInList} </div>;
}

export default CreateLogInList;
