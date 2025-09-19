import { Outlet } from "react-router";

function App() {
  return (
    <div className="app min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-4xl mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
