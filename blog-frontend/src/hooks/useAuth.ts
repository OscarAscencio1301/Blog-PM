import { useDispatch, useSelector } from "react-redux";
import { GlobalSlice } from "../interfaces/global/global.interfaces";
import { InitialStateAuth, User } from "../interfaces/auth/auth.interfaces";
import {
  analyzingUser,
  loginUser,
  logoutUser,
} from "../store/slices/auth.Slice";
import blogAPI from "../api/config";

export const useAuth = () => {
  const { statusAuth, error, user } = useSelector<
    GlobalSlice,
    InitialStateAuth
  >((state) => state.auth);
  const dispatch = useDispatch();

  const loginAction = async (user: User) => {
    dispatch(analyzingUser());
    try {
      const { data } = await blogAPI.post("/auth/login", { ...user });

      if (!data.ok) return;

      localStorage.setItem("jwt", data.token);
      dispatch(loginUser(data.user));
    } catch (error) {
      console.log(error);
      dispatch(logoutUser());
    }
  };

  const registerAction = async (user: User) => {
    dispatch(analyzingUser());
    try {
      const { data } = await blogAPI.post("/auth/register", { ...user });

      if (!data.ok) return;

      localStorage.setItem("jwt", data.token);
      dispatch(loginUser(data.user));
    } catch (error) {
      console.log(error);
      dispatch(logoutUser());
    }
  };

  const renewAction = async () => {
    const token = localStorage.getItem("jwt");
    if (!token) return dispatch(logoutUser());

    dispatch(analyzingUser());
    try {
      const { data } = await blogAPI.get("/auth/renew");

      if (!data.ok) return;

      localStorage.setItem("jwt", data.token);
      dispatch(loginUser(data.user));
    } catch (error) {
      console.log(error);
      dispatch(logoutUser());
    }
  };

  const logoutAction = () => {
    localStorage.clear();
    dispatch(logoutUser());
  };

  return {
    statusAuth,
    error,
    user,
    loginAction,
    registerAction,
    logoutAction,
    renewAction,
  };
};
