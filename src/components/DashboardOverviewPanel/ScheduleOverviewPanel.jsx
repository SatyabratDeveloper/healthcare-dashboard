import { CalendarView, SimpleAppointmentCard, UpcomingSchedule } from "../";
const ScheduleOverviewPanel = () => {
  return (
    <div className="bg-blue-50/75 pt-32 px-16">
      {/* Calendar Section */}
      <CalendarView />

      {/* Simple Appointment Section */}
      <div className="flex gap-4">
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
      <div className="mt-5">
        <div className="text-indigo-900 text-2xl font-semibold">
          The Upcoming Schedule
        </div>

        {/* Upcoming Schedule on Thursday */}
        <div className="text-gray-400 text-xl font-medium pt-6">
          On Thursday
        </div>
        <div className="flex gap-4">
          <UpcomingSchedule
            primary="false"
            title="Health checkup complete"
            time="11:00 AM"
            icon="💉"
          />
          <UpcomingSchedule
            primary="false"
            title="Ophthalmologist"
            time="14:00 PM"
            icon="👁️"
          />
        </div>

        {/* Upcoming Schedule on Saturday */}
        <div className="text-gray-400 text-xl font-medium pt-6">
          On Saturday
        </div>
        <div className="flex gap-4">
          <UpcomingSchedule
            primary="false"
            title="Cardiologist"
            time="12:00 AM"
            icon="❤️"
          />
          <UpcomingSchedule
            primary="false"
            title="Neurologist"
            time="16:00 PM"
            icon="🧑‍⚕️"
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleOverviewPanel;
