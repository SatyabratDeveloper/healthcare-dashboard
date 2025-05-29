import { CalendarView, SimpleAppointmentCard, UpcomingSchedule } from "../";
import { upcomingAppointments } from "../../data/upcomingAppointments";
const ScheduleOverviewPanel = () => {
  return (
    <div className="bg-blue-50/75 2xl:pt-28 xl:pt-25 lg:pt-21 md:pt-20 xl:px-10 px-3 pb-5">
      {/* Calendar Section */}
      <CalendarView />

      {/* Simple Appointment Section */}
      <div className="flex gap-x-3 gap-y-2 lg:flex-nowrap md:flex-wrap pt-5">
        <SimpleAppointmentCard
          title="Dentist"
          time="09:00-11:00"
          doctor="Dr. Cameron Williamson"
          icon="🦷"
          primary="true"
        />
        <SimpleAppointmentCard
          title="Physiotherapy Appointment"
          time="11:00-12:00"
          doctor="Dr. Kevin Djones"
          icon="💪"
          variant="false"
        />
      </div>

      {/* Upcoming Schedule */}
      <div className="mt-4">
        <div className="text-indigo-900 2xl:text-2xl lg:text-xl sm:text-lg text-md font-semibold">
          The Upcoming Schedule
        </div>

        {upcomingAppointments.map((schedule, index) => (
          <div key={index}>
            <div className="text-gray-400 2xl:text-xl lg:text-lg sm:text-md text-base font-medium mt-4">
              On {schedule.day}
            </div>
            <div className="flex gap-x-3 gap-y-2 lg:flex-nowrap md:flex-wrap pt-5">
              {schedule.appointments.map((appointment, idx) => (
                <UpcomingSchedule key={idx} {...appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleOverviewPanel;
