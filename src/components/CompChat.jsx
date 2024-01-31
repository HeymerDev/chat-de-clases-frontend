import { useContext, useState } from "react";
import CompMessages from "./CompMessages";
import axios from "axios";
import { Url } from "../resources/Url";
import { userContext } from "../Hooks/useUser";

const CompChat = () => {
  const [state, setState] = useState(false);
  const { userS } = useContext(userContext);
  const [content, setContet] = useState("");

  const messageBody = {
    content,
    sender: userS,
  };

  const createUser = () => {
    axios
      .post(`${Url}/messages/create`, messageBody)
      .then((res) => {
        console.log("Mensaje Creado");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between">
          <a>
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <button
            className="text-gray-500 outline-none md:hidden"
            onClick={() => setState(!state)}
          ></button>
        </div>
        <ul
          className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${
            state
              ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static"
              : "hidden"
          }`}
        >
          <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12"></div>
          <li className="order-2 py-5 md:py-0">
            <a
              href="javascript:void(0)"
              className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline"
            >
              Cerrar Sesion
            </a>
          </li>
        </ul>
      </nav>
      <section className="py-28">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-start justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <iframe
              width="900"
              height="500"
              src="https://www.youtube.com/embed/wNScop3rq_g?si=zAgNm-tr82CmE4S-?autoplay=1"
              title="YouTube video player"
              frameborder="8"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-col items-end space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-lg  text-indigo-600 font-semibold">Chats</h1>

            <CompMessages />

            <div className="relative flex items-center justify-between max-w-md">
              <input
                type="text"
                placeholder="Escribe un Mensaje"
                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={content}
                onChange={(e) => setContet(e.target.value)}
              />

              <button
                className="px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200"
                onClick={createUser}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompChat;
