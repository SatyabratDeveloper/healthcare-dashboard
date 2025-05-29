const HealthStatusCard = ({ img, title, date, progress, progressColor }) => {
  return (
    <div className="bg-blue-50/75 rounded-2xl 2xl:p-5 xl:px-4 xl:py-2 lg:px-4 lg:py-3 md:p-4 sm:p-4 p-3  2xl:w-48 xl:w-40 lg:w-32 md:w-36 sm:w-60 w-40">
      <div className="flex items-center gap-2 mb-2">
        <span className="2xl:text-4xl xl:text-3xl lg:text-xl md:text-xl text-3xl">
          {img}
        </span>
        <h3 className="xl:text-lg md:text-md text-lg font-semibold text-indigo-900">
          {title}
        </h3>
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
