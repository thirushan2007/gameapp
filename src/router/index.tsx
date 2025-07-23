import { Route, Routes } from "react-router-dom";
import HomePage from "../screens/home/home";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/gameapp" Component={HomePage} />
      </Routes>
    </div>
  );
};

export default MainRouter;
