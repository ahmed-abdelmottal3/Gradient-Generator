import { useState } from "react";

export default function App() {
  const [colors, setColors] = useState(["#ff0000", "#0000ff"]);
  const [darkMode, setDarkMode] = useState(true);
  const [angle , setAngle] = useState("90");

  const cssCode = `background: linear-gradient(${angle}deg, ${colors.join(", ")});`;
const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      alert("CSS copied to clipboard!");
    } catch (err) {
      alert("Failed to copy CSS");
    }
  };
  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-black text-white"
          : "bg-gradient-to-br from-gray-100 to-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/*---------------------------- Controls Panel ----------------------------*/}
        <div
          className={`rounded-2xl p-6 shadow-lg flex flex-col gap-6 transition-colors duration-500 ${
            darkMode
              ? "bg-white/10 backdrop-blur-lg text-white"
              : "bg-white border border-gray-200 text-gray-900"
          }`}
        >
          {/*---------------------------- Header ----------------------------*/}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-wide">
               Gradient Generator
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded-lg text-sm cursor-pointer font-medium border transition hover:opacity-80"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
          {/*---------------------------- Angle Control ----------------------------*/}
          <div>
            <label className="block text-sm mb-2">Angle (deg): <span className="font-bold">{angle}deg</span></label>
            <input
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={(e)=>{setAngle(e.target.value)}}
              className="w-full accent-pink-500"
            />
          </div>

          {/*---------------------------- Color Pickers ----------------------------*/}
          <div className="flex flex-col gap-3">
            {colors.map((color, i) => (
              <div key={i} className="flex items-center gap-3">
                <input onChange={(e)=>{
                  const newColors = [...colors];
                  newColors[i] = e.target.value
                  setColors(newColors)
                  }} 
                  type="color" 
                  value={color} 
                  className="w-12 h-10 rounded" />

                <input
                onChange={(e)=>{
                  const newColors =[...colors]
                  newColors[i] = e.target.value
                  setColors(newColors)
                }}
                 type="text" 
                 value={color} 
                 className={`flex-1 p-2 rounded-lg border ${
                    darkMode
                      ? "bg-white/20 border-white/30"
                      : "bg-gray-50 border-gray-300"
                  }`}
                />

                 <button
                  type="button"
                  onClick={() => setColors(colors.filter((_, index) => index !== i))}
                  className="px-2.5 py-1 text-sm rounded-lg bg-red-600 hover:bg-red-700 text-white"
                >
                  X
                </button>
              </div>
            ))}
            <button 
             onClick={() => setColors([...colors, "#ffffff"])}
             className="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition">
              + Add Color
            </button>

          </div>
        </div>

        {/*---------------------------- Preview Section ----------------------------*/}
      <div className="flex flex-col items-center gap-6">
      <div
        className="w-full h-80 rounded-2xl shadow-2xl border border-white/20"
        style={{ background: `linear-gradient(${angle}deg, ${colors.join(", ")})` }}
      />

      <div className="w-full">
        <textarea
          readOnly
          className={`w-full p-3 rounded-lg font-mono text-sm border ${
            darkMode
              ? "bg-white/10 border-white/20 text-white"
              : "bg-gray-50 border-gray-300 text-gray-900"
          }`}
          rows={3}
          value={cssCode}
        />
        <button
          onClick={handleCopy}
          className="mt-3 w-full px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition text-white"
        >
          Copy CSS
        </button>
      </div>
    </div>
      </div>
    </div>
  );
}
