import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
import { addUser } from "../services";

export const SignUp = () => {
  const [user, setUserState] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userReq = await addUser(
        user.usuario,
        user.clave,
        user.nombre,
        user.apellido
      );

      dispatch(setUser(userReq));
      alert("Usuario Creado");
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserState((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <div className="flex items-center h-screen justify-center">
        <form className="m-4 w-1/3" onSubmit={handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/6">
              <label
                className="block w-full text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Usuario
              </label>
            </div>
            <div className="md:w-5/6">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="usuario"
                name="usuario"
                type="text"
                value={user.usuario || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/6">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Clave
              </label>
            </div>
            <div className="md:w-5/6">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="clave"
                name="clave"
                type="password"
                placeholder="******************"
                value={user.clave || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/6">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Nombre
              </label>
            </div>
            <div className="md:w-5/6">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="nombre"
                name="nombre"
                type="text"
                value={user.nombre || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/6">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Apellido
              </label>
            </div>
            <div className="md:w-5/6">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="apellido"
                name="apellido"
                type="text"
                value={user.apellido || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/6" />
            <div className="md:w-5/6">
              <button
                className="shadow w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
