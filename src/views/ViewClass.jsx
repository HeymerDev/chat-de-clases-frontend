import { useContext, useEffect } from "react";
import CompChat from "../components/CompChat";
import { userContext } from "../Hooks/useUser";

const ViewClass = () => {
  const { userS } = useContext(userContext);
  console.log(userS);

  return (
    <>
      <CompChat />
    </>
  );
};

export default ViewClass;
