import {
  Header,
  Sidebar,
  HealthOverviewPanel,
  ScheduleOverviewPanel,
} from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="grid grid-cols-[1fr_3fr_3.5fr]">
        <Sidebar />
        <HealthOverviewPanel />
        <ScheduleOverviewPanel />
      </div>
    </div>
  );
}

export default App;
