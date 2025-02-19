import InputComponent from "../InputComponent";

function CreateSignUpList({ formData, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...formData,
      [name]: value,
    });
  };

  const InputComponents = [
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      classType: "col-md-6",
      onChange: handleChange,
    },
    {
      type: "password",
      name: "validPassword",
      placeholder: "re-enter password",
      classType: "col-md-6",
      onChange: handleChange,
    },
    {
      type: "text",
      name: "nickname",
      placeholder: "Nickname",
      classType: "col-md-6",
      onChange: handleChange,
    },
    {
      type: "text",
      name: "username",
      placeholder: "Username",
      classType: "col-md-6",
      onChange: handleChange,
    },
  ];

  const SignUpList = InputComponents.map((input, key) => {
    return <InputComponent {...input} key={key} />;
  });

  return <div className="row g-3">{SignUpList}</div>;
}

export default CreateSignUpList;
