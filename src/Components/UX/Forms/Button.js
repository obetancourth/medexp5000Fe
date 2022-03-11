import './Forms.css';

const BaseButton = ({children, ...rest})=>{
  return (
    <button {...rest}>{children}</button>
  );
}

export const PrimaryButton = ({className: customClassName, children, ...rest})=>{
  return (
    <BaseButton
      className={['button_primary', customClassName].join(' ')}
      {...rest}
    >
      {children}
    </BaseButton>
  );
}

export const SecondaryButton = ({ children, ...rest }) => {
  return (
    <BaseButton
      className="button_secondary"
      {...rest}
    >
      {children}
    </BaseButton>
  );
}

export const Button = ({ children, ...rest }) => {
  return (
    <BaseButton
      className="button"
      {...rest}
    >
      {children}
    </BaseButton>
  );
}
