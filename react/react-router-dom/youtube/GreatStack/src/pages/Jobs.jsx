import { useLoaderData, Link } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();
  return (
    <div className="jobs">
      {jobsData.map((job) => {
        return (
          <Link to={job.id} key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const res = await fetch("http://localhost:5500/jobs");
  return await res.json();
};
