import {
  Header,
  Sidebar,
  HealthOverviewPanel,
  ScheduleOverviewPanel,
} from "./components";

function App() {
  return (
    <div>
      <Header />
      <div className="grid lg:grid-cols-[4fr_11fr_10fr] md:grid-cols-[6fr_5fr]">
        <Sidebar />
        <HealthOverviewPanel />
        <ScheduleOverviewPanel />
      </div>
    </div>
  );
}

export default App;
