// import { useLoaderData, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  // const {jobId} = useParams();

  const jobData = useLoaderData();

  return (
    <div>
      <p>
        <b>Job Title: </b> {jobData.title}
      </p>
      <p>
        <b>Job Location: </b> {jobData.location}
      </p>
      <p>
        <b>Job Salary: </b> {jobData.salary}
      </p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;

export const JobDetailsLoader = async ({ params }) => {
  const { jobId } = params;
  const res = await fetch("http://localhost:5500/jobs/" + jobId);
  if (!res.ok) {
    throw Error("Job Details Not Found");
  }
  return res.json();
};
