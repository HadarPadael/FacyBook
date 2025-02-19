import InputComponent from "../InputComponent";

function CreateLogInList({ formData, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...formData,
      [name]: value,
    });
  };

  const InputComponents = [
    {
      type: "text",
      name: "username",
      placeholder: "Username",
      classType: "mb-3",
      onChange: handleChange,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      classType: "mb-3",
      onChange: handleChange,
    },
  ];

  const LogInList = InputComponents.map((input, key) => {
    return <InputComponent {...input} key={key} />;
  });

  return <div> {LogInList} </div>;
}

export default CreateLogInList;
