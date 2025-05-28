import { MoveRight, MoveLeft } from "lucide-react";

const calendarData = [
  { day: "Mon", date: 25, slots: ["10:00", "11:00", "12:00"] },
  {
    day: "Tues",
    date: 26,
    slots: ["08:00", "09:00", "10:00"],
    activeSlot: "09:00",
  },
  { day: "Wed", date: 27, slots: ["12:00", "", "13:00"] },
  {
    day: "Thurs",
    date: 28,
    slots: ["10:00", "11:00", "-"],
    activeSlot: "11:00",
  },
  { day: "Fri", date: 29, slots: ["-", "14:00", "16:00"] },
  {
    day: "Sat",
    date: 30,
    slots: ["12:00", "14:00", "15:00"],
    activeSlot: "12:00",
  },
  {
    day: "Sun",
    date: 31,
    slots: ["09:00", "10:00", "11:00"],
    activeSlot: "09:00",
    dimmed: true,
  },
];

const CalendarView = () => {
  return (
    <>
      {/* Month Heading and Navigation */}
      <div className="flex justify-between items-center mb-7 max-w-2xl">
        <h3 className="text-lg font-semibold text-indigo-900">October 2021</h3>
        <div className="flex gap-4 text-indigo-900">
          <MoveLeft className="w-7 h-7 cursor-pointer" />
          <MoveRight className="w-7 h-7 cursor-pointer" />
        </div>
      </div>
      {/* Calendar */}
      <div className="grid grid-cols-7 max-w-2xl">
        {calendarData.map(({ day, date, slots, activeSlot, dimmed }, idx) => (
          <div
            key={idx}
            className={`text-center ${dimmed ? "opacity-50" : ""}`}
          >
            {/* Day and Date */}
            <div className="text-xs text-indigo-900 font-medium mb-2">
              {day}
            </div>
            <div className="text-xl font-bold mb-5">{date}</div>

            {/* Slots */}
            <div className="flex flex-col gap-3">
              {slots.map((slot, idx) =>
                slot === "-" || slot === "" ? (
                  <div key={idx} className="text-xs text-gray-300">
                    —
                  </div>
                ) : (
                  <div
                    key={idx}
                    className={`text-xs rounded-lg px-5 py-2 mx-auto font-medium ${
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
