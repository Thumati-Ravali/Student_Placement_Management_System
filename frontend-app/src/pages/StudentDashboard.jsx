import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();
  const studentEmail = localStorage.getItem("email");

  // 🔁 Fetch applications
  const fetchApplications = () => {
    axios.get("http://localhost:5000/api/applications")
      .then(res => setApplications(res.data))
      .catch(err => console.log(err));
  };

  // 🔁 Fetch jobs
  const fetchJobs = () => {
    axios.get("http://localhost:5000/api/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchApplications();
    fetchJobs();
  }, []);

  const filteredApps = studentEmail
    ? applications.filter(app => app.email === studentEmail)
    : applications;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Student Dashboard</h1>

      {/* 🔥 JOBS SECTION */}
      <h2>Available Jobs</h2>

      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map(job => (
          <div key={job._id} style={card}>
            <p><b>{job.title}</b></p>
            <p>{job.company}</p>

            <button onClick={() => navigate(`/apply/${job._id}`)}>
              Apply
            </button>
          </div>
        ))
      )}

      {/* 🔥 APPLICATIONS SECTION */}
      <h2>Your Applications</h2>

      {filteredApps.length === 0 ? (
        <p>No applications yet</p>
      ) : (
        filteredApps.map(app => (
          <div key={app._id} style={card}>
            <p><b>Name:</b> {app.name}</p>
            <p><b>Status:</b> 
              <span style={{
                color:
                  app.status === "Accepted"
                    ? "green"
                    : app.status === "Rejected"
                    ? "red"
                    : "orange",
                fontWeight: "bold"
              }}>
                {" "}{app.status}
              </span>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

const card = {
  border: "1px solid black",
  margin: "15px auto",
  padding: "15px",
  width: "300px",
  borderRadius: "10px"
};

export default StudentDashboard;