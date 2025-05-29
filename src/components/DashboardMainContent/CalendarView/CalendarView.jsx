import { MoveRight, MoveLeft } from "lucide-react";
import { calendarData } from "../../../data/calendarData";

const CalendarView = () => {
  return (
    <>
      {/* Month Heading and Navigation */}
      <div className="flex justify-between items-center mb-7">
        <h3 className="text-lg font-semibold text-indigo-900">October 2021</h3>
        <div className="flex gap-4 text-indigo-900">
          <MoveLeft className="w-7 h-7 cursor-pointer" />
          <MoveRight className="w-7 h-7 cursor-pointer" />
        </div>
      </div>
      {/* Calendar */}
      <div className="grid grid-cols-7">
        {calendarData.map(({ day, date, slots, activeSlot, dimmed }, idx) => (
          <div
            key={idx}
            className={`text-center ${dimmed ? "opacity-50" : ""}`}
          >
            {/* Day and Date */}
            <div className="text-xs text-indigo-900 font-medium mb-2">
              {day}
            </div>
            <div className="text-xl font-bold mb-3">{date}</div>

            {/* Slots */}
            <div className="flex flex-col gap-1">
              {slots.map((slot, idx) =>
                slot === "-" || slot === "" ? (
                  <div key={idx} className="text-xs text-gray-300">
                    —
                  </div>
                ) : (
                  <div
                    key={idx}
                    className={`text-xs rounded-lg xl:px-4 xl:py-2 lg:px-3 md:py-1 sm:px-4 sm:py-2 md:px-2 mx-auto font-medium ${
                      activeSlot === slot
                        ? "bg-indigo-800 text-white"
                        : "text-indigo-900"
                    }`}
                  >
                    {slot}
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CalendarView;
