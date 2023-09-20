import { createContext, useState } from "react";
export const Context = createContext();

const AppContext = ({ children }) => {
  const [leaderboard, setleaderboard] = useState([]);
  const [User, setUser] = useState("");
  const fetcher=(url)=>{
    return fetch(url).then((res)=> res.json())
  }
  return (
    <Context.Provider
      value={{
        User,
        setUser,
        leaderboard,
        setleaderboard,
        fetcher
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
