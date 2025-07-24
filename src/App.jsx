import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#0984E3");

  return (
    <>
      <div>
        <div
          className="w-full h-screen flex flex-col items-center text-center px-4 pt-[25vh]"
          style={{ backgroundColor: color }}
        >
          <h1 className="text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
            HueShift
          </h1>
          <p className="text-base text-gray-300 mt-2 italic">
            Cool your screen with soothing backgrounds
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center items-center gap-2 px-4 py-6 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl">
          <button
            onClick={() => setColor("#FF6B81")}
            type="button"
            className="text-white bg-[#FF6B81] hover:bg-[#ff4f6c] focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Watermelon
          </button>
          <button
            onClick={() => setColor("#A29BFE")}
            type="button"
            className="text-white bg-[#A29BFE] hover:bg-[#8e7ee0] focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Lilac
          </button>
          <button
            onClick={() => setColor("#D63031")}
            type="button"
            className="text-white bg-[#D63031] hover:bg-[#b62526] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Crimson
          </button>
          <button
            onClick={() => setColor("#6C5CE7")}
            type="button"
            className="text-white bg-[#6C5CE7] hover:bg-[#5a4cd0] focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("#00B894")}
            type="button"
            className="text-white bg-[#00B894] hover:bg-[#009b80] focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Mint
          </button>
          <button
            onClick={() => setColor("#E17055")}
            type="button"
            className="text-white bg-[#E17055] hover:bg-[#c55e44] focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Peach
          </button>
          <button
            onClick={() => setColor("#0984E3")}
            type="button"
            className="text-white bg-[#0984E3] hover:bg-[#0870c0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Sky Blue
          </button>
          <button
            onClick={() => setColor("#FAB1A0")}
            type="button"
            className="text-white bg-[#FAB1A0] hover:bg-[#f89b85] focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Coral
          </button>
          <button
            onClick={() => setColor("#55EFC4")}
            type="button"
            className="text-white bg-[#55EFC4] hover:bg-[#3cdab0] focus:ring-4 focus:outline-none focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Teal
          </button>
          <button
            onClick={() => setColor("#FFEAA7")}
            type="button"
            className="text-white bg-[#FFEAA7] hover:bg-[#fddf93] focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Pastel
          </button>
          <button
            onClick={() => setColor("#81ECEC")}
            type="button"
            className="text-white bg-[#81ECEC] hover:bg-[#5fdada] focus:ring-4 focus:outline-none focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Aqua
          </button>
          <button
            onClick={() => setColor("#F8A5C2")}
            type="button"
            className="text-white bg-[#F8A5C2] hover:bg-[#f688ac] focus:ring-4 focus:outline-none focus:ring-rose-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Bubblegum
          </button>
          <button
            onClick={() => setColor("#E84393")}
            type="button"
            className="text-white bg-[#E84393] hover:bg-[#d33784] focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Fuchsia
          </button>
          <button
            onClick={() => setColor("#74B9FF")}
            type="button"
            className="text-white bg-[#74B9FF] hover:bg-[#59a8f5] focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Ice Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;