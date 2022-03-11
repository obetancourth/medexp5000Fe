import './Forms.css';

const Input = (
  {
    label,
    type,
    name,
    placeholder,
    value,
    hasError,
    error,
    info,
    className: customClassName = [],
    onChange: onChangeHandler = ()=>{},
    ...rest
  }
) => {

  return (
    <section className={(['form_field', ...customClassName]).join(' ')}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        {...rest}
      />
      {
        info &&
        <span className="field_info">{info}</span>
      }
      {
        hasError &&
        <span className="field_error">{error}</span>
      }
    </section>
  );
}

// Input.prototype = {}
export default Input;
