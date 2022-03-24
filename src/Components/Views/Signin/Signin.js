import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
const SignIn = ({
  txtCorreoValue,
  txtPasswordValue,
  onChange: onChangeHandler,
  errorTxtCorreo,
  errorPassword,
  onConfirmClick,
  onCancelClick
})=> {
  return (
    <Page header={(<h2>&nbsp;Crear Cuenta</h2>)} footer={<Nav />}>
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
        <PrimaryButton onClick={onConfirmClick}>
          Crear Cuenta
        </PrimaryButton>
        <SecondaryButton onClick={onCancelClick}>
          Tengo Cuenta
        </SecondaryButton>
      </section>
    </Page>
  );
}

export default SignIn;
