import { LoginForm } from "../components/login-form/login-form";

function LoginPage() {
  return (
    <div className="w-screen h-screen flex-column-centered">
      <LoginForm />
      <span>Front-end dev test by Carlos Mejía</span>
    </div>
  );
}

export default LoginPage;
