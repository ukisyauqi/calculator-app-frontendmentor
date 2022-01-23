import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [tema, setTema] = useState(1);
  const [display, setDisplay] = useState("");

  const gvbot = (a, b, c) => {
    //Get Value Based On Tema
    if (tema === 1) return a;
    if (tema === 2) return b;
    return c;
  };

  const states = {
    tema,
    setTema,
    display,
    setDisplay,
  };

  const functions = {
    gvbot,
  };

  return (
    <AppContext.Provider value={{ states, functions }}>
      {props.children}
    </AppContext.Provider>
  );
};

// pakai:
// const { states, functions } = useContext(AppContext)
// const { namaFunct } = functions
// const { namaStates } = states
