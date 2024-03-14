import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { useAuth } from "../hooks/useAuth";

type DataForm = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<DataForm>();
  const { loginAction } = useAuth();

  const onSubmitForm: SubmitHandler<DataForm> = (data) => {
    loginAction(data);
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl">Ingresa a tu cuenta</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            type="email"
            className="w-full bg-transparent border border-gray-500 rounded-md p-2 outline-none"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label>Password</label>
          <input
            type="password"
            className="w-full bg-transparent border border-gray-500 rounded-md p-2 outline-none"
            {...register("password")}
          />
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-cyan-900 w-full p-2 mt-4 text-white"
        >
          Ingresar
        </button>
      </form>
      <Link to="/auth/register" className="text-right mt-1 text-lg">
        ¿No tienes cuenta?
      </Link>
    </AuthLayout>
  );
};

export default Login;
