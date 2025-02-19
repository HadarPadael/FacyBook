function InputComponent({ type, name, placeholder, classType, onChange }) {
  return (
    <div className={classType}>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default InputComponent;
