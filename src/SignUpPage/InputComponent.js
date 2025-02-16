function InputComponent({ type, placeholder }) {
  return (
    <div className="col-md-6">
      <input
        type={type}
        placeholder={placeholder}
        class="form-control"
        required
      />
    </div>
  );
}

export default InputComponent;
