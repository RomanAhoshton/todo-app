import { memo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.scss";

const App = (): JSX.Element => (
  <Router>
    <AppRoutes />
  </Router>
);

export default memo(App);
