import { useAppSelector } from "@/6_shared/hooks/redux.hooks";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function App() {
  const {questions, isLoading} = useAppSelector(state => state.search)
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoading && questions.length > 0) {
      navigate('/results')
    }
  }, [questions, navigate])

  return (
    <div className="app min-h-screen flex items-center justify-center bg-background">
      <div className="w-full pl-50 pr-50 pt-15 pb-10 mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
