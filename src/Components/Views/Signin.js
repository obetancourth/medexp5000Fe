import Page from "../UX/Page/Page";
import Input from "../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../UX/Forms/Button";
const SignIn = ({txtCorreoValue, txtPasswordValue, onChange: onChangeHandler, errorTxtCorreo, errorPassword })=> {
  return (
    <Page header={(<h2>&nbsp;Crear Cuenta</h2>)}>
      <section>
        <Input
          label="Correo Electrónico"
          type="text"
          name="txtCorreo"
          placeholder="Su Correo Electrónico"
          value={txtCorreoValue}
          error={errorTxtCorreo}
          onChange={onChangeHandler}
        />
        <Input
          label="Contraseña"
          type="password"
          name="txtPassword"
          placeholder="Contraseña"
          value={txtPasswordValue}
          info="Mínimo 8 caractéres, una Mayuscula, una minuscula, un numero y un simbolo"
          error={errorPassword}
          onChange={onChangeHandler}
        />
        <PrimaryButton onClick={()=>{alert('Clicked on me')}}>
          Crear Cuenta
        </PrimaryButton>
        <SecondaryButton>
          Tengo Cuenta
        </SecondaryButton>
      </section>
    </Page>
  );
}

export default SignIn;
