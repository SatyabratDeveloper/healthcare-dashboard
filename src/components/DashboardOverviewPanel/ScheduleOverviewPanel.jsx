import { CalendarView, SimpleAppointmentCard } from "../";
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
    </div>
  );
};

export default ScheduleOverviewPanel;
