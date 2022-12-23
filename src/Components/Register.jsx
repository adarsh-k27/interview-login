import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import ReactButton from "./ReactButton";
import { ToastContainer, toast } from "react-toastify";
import PasswordField from "./Password";
import UserContext from "../Context/index";
import { UserSignIn } from "../api/user";
import { useEffect } from "react";
import { useContext } from "react";
function Register() {
  const { state } = useContext(UserContext);
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [passwordView, setPasswordView] = useState(true);
  const [confirmPasswordView, setConfirmPasswordView] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    //console.log("hyy");
    if (state.auth) {
      
      return Navigate("/");
    }
  }, [state]);

  const handleClick = () => {
    if (name == "" || email == "" || password == "" || confirm == "") {
      return toast.warning("All Field Must Be Fill");
    }
    if (password !== confirm) {
      return toast.warning("Confirm Password is Not Correct");
    }
    const data = {
      name,
      email,
      password,
    };
    UserSignIn(data, Navigate, setError);
  };

  return (
    <div className='w-screen md:w-[40%] shadow-md shadow-black/30 h-autp px-5 py-5 flex flex-col gap-6'>
      <h3 className='text-lg tracking-widest font-serif font-bold text-green-600'>
        REGISTER
      </h3>
      <div className='flex flex-col gap-3'>
        <InputField
          type={"text"}
          placeholder={"User Name"}
          state={name}
          setState={setName}
          setError={setError}
        />
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
          Hidden={passwordView}
          setHidden={setPasswordView}
          setError={setError}
        />
        <PasswordField
          Hidden={confirmPasswordView}
          setHidden={setConfirmPasswordView}
          placeholder={"Confirm Password"}
          state={confirm}
          setState={setConfirm}
          setError={setError}
        />
        <ReactButton
          text={"REGISTER"}
          color={"bg-blue-400"}
          hover={"hover:bg-blue-500"}
          onClick={handleClick}
        />
      </div>
      <div className='text-red-600 text-xs font-serif'>{error && error}</div>
      <div className='text-black/80 text-sm font-serif font-semibold'>
        <p>
          Already Have An Account Please{" "}
          <span className='underline text-blue-500 cursor-pointer'>
            <Link to={"/user/login"}>LOGIN </Link>
          </span>{" "}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
