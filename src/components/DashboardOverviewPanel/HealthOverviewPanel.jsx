import { ChevronDown } from "lucide-react";
import { AnatomySection } from "../";

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

      {/* Anatomy Section */}
      <AnatomySection />
    </div>
  );
};

export default HealthOverviewPanel;
