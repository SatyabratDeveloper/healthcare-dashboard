const SimpleAppointmentCard = ({ primary, title, time, doctor, icon }) => {
  return (
    <div
      className={`${
        primary === "true"
          ? "bg-indigo-800 text-white"
          : "bg-indigo-200 text-indigo-900"
      } rounded-2xl xl:px-5 xl:py-3 px-3 py-2`}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold 2xl:text-base text-sm">{title}</span>
        <span className="text-xl pl-10">{icon}</span>
      </div>
      <div className="mt-2 2xl:text-sm text-xs font-medium">
        <div>{time}</div>
        <div>{doctor}</div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
