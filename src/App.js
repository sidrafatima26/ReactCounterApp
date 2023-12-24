import React,{ useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  function handleMinus(){
    setCount(count-1);
  }
  function handlePlus(){
    setCount(count+1);
  }

  function handleReset(){
    setCount(0);
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#344151] flex-col gap-10">
      <h1 className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</h1>
      <div className="bg-white h-20 flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#3344151]">
        <button onClick={handleMinus} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"> - </button>
        <span  className="font-bold gap-12 text-5xl "> {count} </span>
        <button onClick={handlePlus}  className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"> + </button>
      </div>
      <button onClick={handleReset}  className="px-5 py-2 rounded-sm text-white text-lg bg-[#0398d4]"> Reset </button>
    </div>
  );
}

export default App;
