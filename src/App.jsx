import { Header, Sidebar } from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="grid grid-cols-[1fr_3fr_3fr]">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
