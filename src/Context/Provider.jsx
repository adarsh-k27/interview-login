import React from "react";
import { useReducer } from "react";
import { GlobalReducer } from "../Context/reducer";
import UserContext from "./index";
const InitialState = {
  auth: false,
  userDetails: {},
};
function Provider({ children }) {
  const [state, dispatch] = useReducer(GlobalReducer, InitialState);
  const LoginUser = (data) => {
    dispatch({ type: "LOGIN", payload: data });
  };
  const LoginReset=(data)=>{
    dispatch({ type: "LOGIN_RESET", payload: data });
  }
  const Update=(data)=>{
    dispatch({type:"UPDATE",payload:data})
  }
  const Logout=()=>{
    dispatch({type:'LOGOUT'})
  }
  return (
    <UserContext.Provider value={{ state,LoginUser,LoginReset,Update,Logout }}>{children}</UserContext.Provider>
  );
}

export default Provider;
