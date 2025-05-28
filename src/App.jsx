import { Header, Sidebar, HealthOverviewPanel } from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="grid grid-cols-[1fr_3fr_3.5fr]">
        <Sidebar />
        <HealthOverviewPanel />
      </div>
    </div>
  );
}

export default App;
