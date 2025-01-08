import { Outlet } from "react-router-dom";

const JobsLayout = () => {
  return (
    <div>
      <h2>Jobs Opening</h2>
      <p>List of current jobs opening</p>
      <Outlet />
    </div>
  );
};

export default JobsLayout;
