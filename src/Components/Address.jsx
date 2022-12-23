import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UpdateUser } from "../api/user";
import { ToastContainer } from "react-toastify";
import UserContext from "../Context/index";
import InputField from "./InputField";
import ReactButton from "./ReactButton";
function Address() {
  const { state, Update, Logout } = useContext(UserContext);
  const Navigate = useNavigate();
  const [gender, setGender] = useState(state?.userDetails?.gender || "");
  const [age, setAge] = useState(state?.userDetails?.age || "");
  const [mobile, setPhone] = useState(state?.userDetails?.mobile || "");
  const [dob, setDate] = useState(state?.userDetails?.dob || "");
  const handleChange = (e) => {
    e.preventDefault();
    setGender(e.target.value);
  };
  console.log(state);
  useEffect(() => {
    if (state.auth == false) {
      return Navigate("/user/login");
    }
  });

  const handleSubmit = () => {
    if (age == "" || mobile == "" || dob == "" || gender == "") {
      return toast.success("All Field Must Be Fill");
    }
    const data = {
      age,
      gender,
      mobile,
      dob,
      email: state.userDetails.email,
    };
    UpdateUser(data, Update);
  };

  return (
    <div className='relative w-full md:w-[50%] flex flex-col gap-2 items-center justify-start shadow-md shadow-black/30 h-aut0 px-5 py-5'>
      <button 
      onClick={(e)=>{
       e.preventDefault()
       localStorage.removeItem('auth')
       localStorage.clear()
       Logout()
      }}
      className='absolute -top-20 px-3 py-2 bg-blue-600 text-white font-bold font-serif rounded-md hover:bg-blue-500'>
        Logout
      </button>
      <h2 className='text-lg font-serif font-bold'>Details </h2>
      <InputField
        type={"number"}
        placeholder={"Age"}
        state={age}
        setState={setAge}
      />
      <InputField
        type={"number"}
        placeholder={"Mobile"}
        state={mobile}
        setState={setPhone}
        // setError={setError}
      />
      <div className='w-full h-auto flex gap-3 px-1 '>
        <input
          type='radio'
          value='male'
          id='male'
          onChange={(e) => handleChange(e)}
          name='gender'
        />
        <label for='male' className='text-md font-semibold font-serif'>
          Male
        </label>

        <input
          type='radio'
          value='female'
          id='female'
          onChange={(e) => handleChange(e)}
          name='gender'
        />
        <label for='female' className='text-md font-semibold font-serif'>
          Female
        </label>

        <input
          type='radio'
          value='trans-gender'
          id='Trans'
          onChange={(e) => handleChange(e)}
          name='gender'
        />
        <label for='trans' className='text-md font-semibold font-serif'>
          Trans Gender
        </label>
      </div>
      <input
        type={"date"}
        className='text-md font-semibold cursor-pointer'
        onChange={(e) => {
          e.preventDefault();
          setDate(e.target.valueAsDate);
        }}
        value={dob}
      />
      <ReactButton
        text={"SUBMIT"}
        color={"bg-blue-400"}
        hover={"hover:bg-blue-500"}
        onClick={handleSubmit}
      />
      <ToastContainer />
    </div>
  );
}

export default Address;
