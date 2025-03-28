import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  const colors = [
    "red",
    "blue",
    "yellow",
    "purple",
    "green",
    "orange",
    "pink",
    "teal",
    "brown",
    "gray",
  ];
  return (
    <div>
      <div
        className="container w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-center align-middle">
          <div className="flex gap-4 bg-slate-100 text-slate-800 px-5 py-3 rounded-lg mt-10 shadow-lg">
            {colors.map((col) => (
              <button
                className="px-3 py-1 rounded-2xl text-white shadow-md transition-all hover:scale-105 text-center"
                style={{ backgroundColor: col }}
                onClick={() => setColor(col)}
              >
                {col}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
