import React from "react";

const HealthStatusCard = ({ img, title, date, progress, progressColor }) => {
  return (
    <div className="bg-blue-50/75 rounded-2xl px-6 pt-2 pb-5 w-60">
      <div className="flex items-center gap-2 mb-2">
        <img src={img} alt={title} className="w-15 h-15" />
        <h3 className="text-lg font-semibold text-indigo-900">{title}</h3>
      </div>
      <p className="text-xs text-gray-400 mt-1 mb-3">Date: {date}</p>
      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${progress}%`,
            backgroundColor: progressColor,
          }}
        />
      </div>
    </div>
  );
};

export default HealthStatusCard;
