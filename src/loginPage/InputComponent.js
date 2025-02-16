function InputComponent({ type, placeholder }) {
  return (
    <div class="mb-3">
      <input type={type} class="form-control" placeholder={placeholder} />
    </div>
  );
}

export default InputComponent;
