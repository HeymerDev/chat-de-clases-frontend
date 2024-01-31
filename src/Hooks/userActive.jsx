import React, { useContext, useEffect } from "react";
import { userContext } from "./useUser";
import { useNavigate } from "react-router-dom";

export const UserActive = () => {
  const { userS } = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userS === null) {
      //en caso de estar el usuario activo, no debe ingresar, ni al register, ni al login
      navigate("/");
    }
  }, [userS]);
};
