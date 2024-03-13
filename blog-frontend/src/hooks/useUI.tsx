import { useDispatch, useSelector } from "react-redux";
import { GlobalSlice } from "../interfaces/global/global.interfaces";
import { InitialStateIO } from "../interfaces/ui/ui.unterfaces";
import { changeStatusSidebar } from "../store/slices/ui.Slice";

export const useUI = () => {
  const { isOpenSidebar } = useSelector<GlobalSlice, InitialStateIO>(
    (state) => state.ui
  );
  const dispatch = useDispatch();

  const changeStatusSidebarAction = () => {
    dispatch(changeStatusSidebar());
  };

  return {
    isOpenSidebar,
    changeStatusSidebarAction,
  };
};
