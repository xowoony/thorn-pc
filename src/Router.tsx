import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`/`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
