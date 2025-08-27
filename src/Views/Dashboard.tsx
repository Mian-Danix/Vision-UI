import { Fragment } from "react";
import Dailyactive from "../COMPONENT/Dailyactive";
import Welcome from "../COMPONENT/Welcome";
import Project from "../COMPONENT/Project";
import Sales from "../COMPONENT/Sales";

const Dashboard = () => {
  return (
    <Fragment>
      <Dailyactive />
      <Welcome />
      <Sales />
      <Project />
    </Fragment>
  );
};

export default Dashboard;
