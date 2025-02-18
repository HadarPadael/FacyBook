function InputComponent({ type, placeholder, classType, onChange }) {
  return (
    <div className={classType}>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default InputComponent;
