import { useState } from "react";
import axios from "axios";
import { Url } from "../resources/Url";
import { Link } from "react-router-dom";

const ViewRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAdmin, setAdmin] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      username,
      password,
      isAdmin,
    };
    axios
      .post(`${Url}/users/create`, user)
      .then((res) => {
        console.log("respuesta del server: " + res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              REGISTRAR
            </h3>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="font-medium">Nombre</label>
            <input
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="font-medium">Username</label>
            <input
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="font-medium">Contraseña</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="remember-me-checkbox"
                className="checkbox-item peer hidden"
                checked={isAdmin}
                onChange={(e) => setAdmin(e.target.checked)}
              />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
              ></label>
              <span>Administrador</span>
            </div>
          </div>

          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Registrar
          </button>
        </form>
        <p className="text-center">
          Ya Tienes cuenta?
          <Link
            to={"/login"}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            inicia sesion
          </Link>
        </p>
      </div>
    </main>
  );
};

export default ViewRegister;
