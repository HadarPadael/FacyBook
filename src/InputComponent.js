function InputComponent({ type, placeholder, classType }) {
  return (
    <div className={classType}>
      <input type={type} class="form-control" placeholder={placeholder} />
    </div>
  );
}

export default InputComponent;
