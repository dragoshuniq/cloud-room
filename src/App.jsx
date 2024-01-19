import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./main";
import Tournaments from "./components/Tournaments";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/tournament" Component={Tournaments} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
