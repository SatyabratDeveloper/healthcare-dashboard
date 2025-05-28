import { ChevronDown, ArrowRight } from "lucide-react";
import { AnatomySection, HealthStatusCard, ActivityFeed } from "../";

const HealthOverviewPanel = () => {
  return (
    <div className="pt-32 mx-12">
      {/* Dashboard Heading */}
      <div className="flex items-center justify-between pb-5">
        <span className="text-indigo-900 text-2xl font-bold">Dashboard</span>
        <span className="flex gap-1 items-center text-xs text-indigo-800 font-medium">
          This week <ChevronDown className="h-3 w-3" />
        </span>
      </div>

      <div className="flex justify-between">
        {/* Anatomy Section */}
        <AnatomySection />

        {/* Health Status Card Section */}
        <div className="mr-5 space-y-3">
          <HealthStatusCard
            img="🫁"
            title="Lungs"
            date="26 Okt 2021"
            progress={90}
            progressColor="#e30000"
          />
          <HealthStatusCard
            img="🦷"
            title="Teeth"
            date="26 Okt 2021"
            progress={60}
            progressColor="#00c6b8"
          />
          <HealthStatusCard
            img="🦴"
            title="Bone"
            date="26 Okt 2021"
            progress={75}
            progressColor="#ff8200"
          />

          {/* Details Link */}
          <span className="flex float-end gap-1.5 items-center text-xs text-indigo-800 font-medium mt-1 -mr-5">
            Details <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>

      {/* ActivityFeed Section */}
      <div className="mt-8">
        <ActivityFeed />
      </div>
    </div>
  );
};

export default HealthOverviewPanel;
