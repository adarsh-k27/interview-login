import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../Context/index";
import InputField from "./InputField";
import ReactButton from "./ReactButton";
import PasswordField from "./Password";
import { toast, ToastContainer } from "react-toastify";
import { UserLogin } from "../api/user";
function Login() {
  const { state, LoginUser } = useContext(UserContext);
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (state.auth == true) {
      Navigate("/");
    }
  }, [state]);

  const handleSubmit = () => {
    console.log(email, password);
    if (email == "" || password == "") {
      return toast.warning("All Field Must Be Fill");
    }
    const data={
      email,
      password
    }
    UserLogin(data, LoginUser,Navigate,setError);
  };

  return (
    <div className='w-full md:w-[40%] shadow-md shadow-black/30 h-aut0 px-5 py-5 flex flex-col gap-6'>
      <h3 className='text-lg tracking-widest font-serif font-bold text-green-600'>
        LOGIN
      </h3>
      <div className='flex flex-col gap-3'>
        <InputField
          type={"text"}
          placeholder={"Email"}
          state={email}
          setState={setEmail}
          setError={setError}
        />
        <PasswordField
          placeholder={"Password"}
          state={password}
          setState={setPassword}
          Hidden={hidden}
          setHidden={setHidden}
          setError={setError}
        />
        <ReactButton
          text={"LOGIN"}
          color={"bg-blue-400"}
          hover={"hover:bg-blue-500"}
          onClick={handleSubmit}
        />
      </div>
      <div className='text-sm font-serif text-red-600 underline'>
        {
          error && error
        }
      </div>
      <div className='text-black/80 text-sm font-serif font-semibold'>
        <p>
          Doesnt Have An Account Yer Please{" "}
          <span className='underline text-blue-500 cursor-pointer'>
            <Link to={"/user/register"}>REGISTER </Link>
          </span>{" "}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
