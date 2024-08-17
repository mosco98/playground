"use client";

const DonutChart = () => {
  // Define your data for the chart (example)
  const data = [
    { value: 30, color: "bg-blue-500" },
    { value: 20, color: "bg-green-500" },
    { value: 50, color: "bg-yellow-500" }
  ];

  return (
    <div className="relative w-32 h-32">
      {/* Base circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full rounded-full border-2 border-gray-200"></div>
      </div>

      {/* Segments */}
      {data.map((segment, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${index === 0 ? "overflow-hidden" : ""}`}
          style={{ clip: `rect(0, 16px, 32px, 0)` }} // Adjust based on segment
        >
          <div
            className={`absolute inset-0 ${segment.color}`}
            style={{
              transform: `rotate(${
                index === 0 ? 0 : `${data[index - 1].value * 3.6}deg`
              })`
            }}
          >
            <div
              className="absolute inset-0 w-full h-full rounded-full clip-auto"
              style={{ clip: `rect(auto, auto, auto, auto)` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonutChart;
