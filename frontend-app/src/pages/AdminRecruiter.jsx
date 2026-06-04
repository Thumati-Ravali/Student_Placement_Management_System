import { useEffect, useState } from "react";
import axios from "axios";

function AdminRecruiters() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth")   // ✅ changed here
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Recruiters</h2>

      {users.map((user) =>
        user.role === "recruiter" && (
          <div key={user._id}>
            <p>{user.name} - {user.email}</p>
          </div>
        )
      )}
    </div>
  );
}

export default AdminRecruiters;