import { useState } from "react";

export default function App() {
  const [colors, setColors] = useState(["#ff0000", "#0000ff"]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Controls Panel */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg flex flex-col gap-6">
          <h1 className="text-2xl font-bold tracking-wide text-center">
             Gradient Generator
          </h1>

          {/* Gradient Type */}
          <div>
            <label className="block text-sm mb-2">Gradient Type</label>
            <select className="w-full p-2 rounded-lg bg-white/20 border border-white/30">
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>

          {/* Angle Control */}
          <div>
            <label className="block text-sm mb-2">Angle (deg)</label>
            <input
              type="range"
              min="0"
              max="360"
              className="w-full accent-pink-500"
            />
          </div>

          {/* Color Pickers */}
          <div className="flex flex-col gap-3">
            {colors.map((color, i) => (
              <div key={i} className="flex items-center gap-3">
                <input type="color" value={color} className="w-12 h-10 rounded" />
                <input
                  type="text"
                  value={color}
                  className="flex-1 p-2 rounded-lg bg-white/20 border border-white/30"
                />
              </div>
            ))}
            <button className="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition">
              + Add Color
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-full h-80 rounded-2xl shadow-2xl border border-white/20 bg-gradient-to-r from-pink-500 to-purple-500" />
          <div className="w-full">
            <textarea
              readOnly
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 font-mono text-sm"
              rows={3}
              value={`background: linear-gradient(90deg, #ff0000, #0000ff);`}
            />
            <button className="mt-3 w-full px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition">
              Copy CSS
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
