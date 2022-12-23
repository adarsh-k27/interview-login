import React from "react";

function ReactButton({ text, hover, color,onClick }) {
  return (
    <div
      className={`w-full h-auto px-2 py-2 flex items-center justify-center ${
        color ? color : "bg-green-500"
      } ${hover && hover}`}
    >
      <button className='text-sm font-semibold text-white tracking-widest'
      onClick={(e)=>{
        e.preventDefault()
        onClick()
      }}
      >
        {text}
      </button>
    </div>
  );
}

export default ReactButton;
