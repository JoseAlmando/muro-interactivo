import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../features/userSlice";

export const NavBar = () => {
  const user = useSelector((state) => state.user.value);
  const auth = useSelector((state) => state.user.auth);
const dispatch = useDispatch()
  useEffect(() => {
    console.log(user, auth);
  }, []);
  return (
    <div className="bg-blue-700 p-2 flex content-between">
      <div className="text-white text-2xl w-2/3">Muro Interactivo</div>
      <div className="w-1/3 flex justify-end">
        {!auth && (
          <div>
            {" "}
            <NavLink
              className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              to="login"
            >
              Acceder
            </NavLink>{" "}
            <NavLink
              className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              to="signUp"
            >
              Crear Usuario
            </NavLink>
          </div>
        )}
        {auth && (
          <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => dispatch(logOut())}>
            SignOut
          </button>
        )}
      </div>
    </div>
  );
};
