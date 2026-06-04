import { useEffect, useState } from "react";

function RecruiterApplications() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs/applications")   // ✅ changed
      .then(res => res.json())
      .then(data => setApps(data))
      .catch(err => console.log(err));
  }, []);

  const accept = async (id) => {
    await fetch(`http://localhost:5000/api/jobs/accept/${id}`, {   // ✅ changed
      method: "POST"
    });
    alert("Accepted ✅");
  };

  return (
    <div>
      <h2>Applications</h2>

      {apps.map(a => (
        <div key={a._id}>   {/* 🔥 FIX: use _id instead of id */}
          <p>{a.name} - {a.status}</p>
          <button onClick={() => accept(a._id)}>Accept</button>  {/* 🔥 FIX */}
        </div>
      ))}
    </div>
  );
}

export default RecruiterApplications;