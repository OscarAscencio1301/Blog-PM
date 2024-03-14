import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AuthLayout } from "../components/layouts/AuthLayout";

type DataForm = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<DataForm>();
  const { registerAction } = useAuth();

  const onSubmitForm: SubmitHandler<DataForm> = (data) => {
    registerAction(data);
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl">Crear una cuenta</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            type="text"
            className="w-full bg-transparent border border-gray-500 rounded-md p-2 outline-none"
            {...register("name")}
          />
        </div>
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
          Registrar
        </button>
      </form>
      <Link to="/auth/login" className="text-right mt-1 text-lg">
        Ingresa a tu cuenta
      </Link>
    </AuthLayout>
  );
};

export default Register;
