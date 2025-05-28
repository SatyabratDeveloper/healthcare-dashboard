const UpcomingSchedule = ({ primary, title, time, icon }) => {
  return (
    <div
      className={`${
        primary === "true"
          ? "bg-indigo-800 text-white"
          : "bg-indigo-200 text-indigo-900"
      } rounded-2xl p-4 mt-4`}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold">{title}</span>
        <span className="text-xl pl-12">{icon}</span>
      </div>
      <div className="mt-2 text-sm font-medium">
        <div>{time}</div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
