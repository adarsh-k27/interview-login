import React from "react";

function InputField({ type, placeholder,state,setState,setError }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e)=>{
        e.preventDefault()
        setState(e.target.value)
        setError && setError("")
      }}
      value={state}
      className='w-full h-10 border tracking-widest border-black/20 focus:border-blue-300 '
    ></input>
  );
}

export default InputField;
