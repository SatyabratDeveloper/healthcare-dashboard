import { ChevronDown, ArrowRight } from "lucide-react";
import { AnatomySection, HealthStatusCard, ActivityFeed } from "../";
import { healthData } from "../../data/healthData";

const HealthOverviewPanel = () => {
  return (
    <div className="2xl:pt-28 xl:pt-25 lg:pt-21 md:pt-20 pt-18 2xl:mx-12 xl:mx-6 mx-3 max-w-lvw">
      {/* Dashboard Heading */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-indigo-900 md:text-2xl text-xl font-bold">
          Dashboard
        </span>
        <span className="flex gap-1 items-center text-xs text-indigo-800 font-medium">
          This week <ChevronDown className="h-3 w-3" />
        </span>
      </div>

      <div className="flex justify-evenly 2xl:gap-15 xl:gap-12 md:gap-3 sm:gap-5 gap-2">
        {/* Anatomy Section */}
        <AnatomySection />

        {/* Health Status Card Section */}
        <div className="mr-5 space-y-3">
          {healthData.map((item, index) => (
            <HealthStatusCard key={index} {...item} />
          ))}

          {/* Details Link */}
          <span className="flex float-end gap-1.5 items-center text-xs text-indigo-800 font-medium mt-1 -mr-5">
            Details <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>

      {/* ActivityFeed Section */}
      <div className="mt-4">
        <ActivityFeed />
      </div>
    </div>
  );
};

export default HealthOverviewPanel;
