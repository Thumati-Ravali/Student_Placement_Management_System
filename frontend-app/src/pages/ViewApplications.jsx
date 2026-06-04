import { useEffect, useState } from "react";
import axios from "axios";

function ViewApplications() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/applications")
      .then(res => setApps(res.data))
      .catch(err => console.log(err));
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(
      `http://localhost:5000/api/applications/${id}`,
      { status }
    );
    window.location.reload();
  };

  return (
    <div>
      <h2>Applications</h2>

      {apps.map(app => (
        <div key={app._id}>
          <p>{app.name} - {app.email}</p>
          <p>Status: {app.status}</p>

          <button onClick={() => updateStatus(app._id, "Accepted")}>
            Accept
          </button>

          <button onClick={() => updateStatus(app._id, "Rejected")}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}

export default ViewApplications;