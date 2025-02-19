import InputComponent from "../../InputComponent";

function CreateNewPostList({ formData, setData }) {
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
      name: "content",
      placeholder: "What do you wanna say?",
      classType: "text-center postContent",
      onChange: handleChange,
    },
  ];

  const NewPostList = InputComponents.map((input, key) => {
    return <InputComponent {...input} key={key} />;
  });

  return <div className="row g-3">{NewPostList}</div>;
}

export default CreateNewPostList;
