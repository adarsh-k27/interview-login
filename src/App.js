import logo from "./logo.svg";
import "./App.css";
import RouterWrapper from "./Router";
import { useContext, useEffect } from "react";
import UserContext from './Context'

function App() {
  const {
    state,
    LoginReset
  } = useContext(UserContext)
  console.log("state",state);
  useEffect(()=>{
    const auth=localStorage.getItem('auth')
    const details = JSON.parse(localStorage.getItem('user'))
    console.log(auth,details);
    if(auth && details && details.email){
      LoginReset(details)
    }
  },[])
  return (
    <div className='App w-screen h-screen flex items-center justify-center '>
      <RouterWrapper />
    </div>
  );
}

export default App;
