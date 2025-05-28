const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const activityData = [
  [40, 70, 50, 25],
  [80, 30, 50, 75],
  [50, 20, 70, 30],
  [20, 55, 75, 50],
  [70, 40, 50, 80],
  [60, 30, 70, 40],
  [40, 65, 35, 55],
];

const ActivityFeed = () => {
  return (
    <div className="bg-blue-50/75 p-5 rounded-2xl">
      {/* Heading */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-indigo-900">Activity</h3>
        <span className="text-sm text-gray-400">
          3 appointment on this week
        </span>
      </div>
      <div className="flex justify-between items-end mx-7">
        {/* Graphs */}
        {activityData.map((heights, dayIndex) => (
          <div key={dayIndex} className="flex flex-col items-center gap-2">
            <div className="flex gap-2.5 items-center">
              {heights.map((h, idx) => (
                <div
                  key={idx}
                  className={`w-1 rounded-full`}
                  style={{
                    height: `${h * 1.5}px`,
                    backgroundColor:
                      idx === 0
                        ? "#9ca3af"
                        : idx === 1
                        ? "#22d3ee"
                        : idx === 2
                        ? "#3730a3"
                        : "#d1d5db",
                  }}
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">{days[dayIndex]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
