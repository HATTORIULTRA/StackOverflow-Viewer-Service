import { Button } from "@/6_shared/components/ui/button";
import { Outlet, Link } from "react-router";

function App() {
  return (
    <div className="app min-h-screen bg-background">
      <div className="flex justify-end p-4">
        <div className="flex gap-4 mr-4 mt-4">
          <Link to={"/"}>
            <Button>go to Search</Button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="w-full max-w-8xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
