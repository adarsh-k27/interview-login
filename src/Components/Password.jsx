import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
function PasswordField({
  placeholder,
  state,
  setState,
  setError,
  Hidden,
  setHidden,
}) {
  return (
    <div className='relative w-auto'>
      <input
        type={Hidden ? "password" : "text"}
        placeholder={placeholder}
        onChange={(e) => {
          e.preventDefault();
          setState(e.target.value);
          setError("");
        }}
        value={state}
        className=' w-full h-10 border tracking-widest border-black/20 focus:border-blue-300 '
      ></input>
      {Hidden ? (
        <AiFillEye
          className='absolute right-3 top-3 text-lg cursor-pointer '
          onClick={() => {
            setHidden((prev) => !prev);
          }}
        />
      ) : (
        <AiFillEyeInvisible
          className='absolute right-3 top-3 text-lg cursor-pointer '
          onClick={() => {
            setHidden((prev) => !prev);
          }}
        />
      )}
    </div>
  );
}

export default PasswordField;
