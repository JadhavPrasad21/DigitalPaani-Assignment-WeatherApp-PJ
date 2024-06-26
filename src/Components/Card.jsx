import React, { useContext } from "react";
import AppContext from "../Provider/appContext";

function Card({ children, className }) {
  const {
    app: { isDark },
  } = useContext(AppContext);
  const card = {
    background: "rgb(25 32 45)",
    color: "#fff",
  };
  return (
    <div className={className} style={isDark ? card : null}>
      {children}
    </div>
  );
}

export default Card;
