import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Views/Dashboard";
import Billing from "./Views/Billing";
import Profile from "./Views/Profile";
import Layout from "./Layout";
import Table from "./Views/Table";
import Signin from "./Views/Singin";
import Signup from "./Views/Singup";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tables" element={<Table />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
