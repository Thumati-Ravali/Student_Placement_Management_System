import { useEffect, useState } from "react";
import axios from "axios";

function AdminJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")   // ✅ changed here
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Jobs</h2>

      {jobs.map((job) => (
        <div key={job._id}>
          <p>{job.title} - {job.company}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminJobs;