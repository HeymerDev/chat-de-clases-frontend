import { useContext, useState } from "react";
import axios from "axios";
import { Url } from "../resources/Url";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../Hooks/useUser";

const ViewLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userS, setUserS } = useContext(userContext);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    axios
      .post(`${Url}/users/login`, user)
      .then((res) => {
        if (res) {
          setUserS(res.data);
          console.log("respuesta del server: " + res.data);
          navigate("/class");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              INICIAR SESION
            </h3>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-5">
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

          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Iniciar Sesion
          </button>
        </form>
        <p className="text-center">
          No Tienes cuenta?
          <Link
            to={"/register"}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Registrate
          </Link>
        </p>
      </div>
    </main>
  );
};

export default ViewLogin;
