import { useState } from "react";

const LocalStorage2 = () => {
  const [num, setNum] = useState(localStorage.getItem("num"));
  return (
    <div>
      <span className="w-24">{num}</span>
      <button
        onClick={() => {
          localStorage.setItem("num", `${Number(num) + 3}`);
          setNum(localStorage.getItem("num"))
        }}
        className="bg-red-300 rounded p-2 mx-2"
      >
        Add
      </button>
      <input onChange={(e)=>{
        localStorage.setItem("num", `${e.target.value}`);
        setNum(localStorage.getItem("num"))
      }}
      className="border-2 w-14"
      type='number'></input>
    </div>
  );
};

export default LocalStorage2;
