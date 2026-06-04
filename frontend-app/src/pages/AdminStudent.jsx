import { useEffect, useState } from "react";
import axios from "axios";

function AdminStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth")   // ✅ changed here
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Students</h2>

      {students.map((user) =>
        user.role === "student" && (
          <div key={user._id}>
            <p>{user.name} - {user.email}</p>
          </div>
        )
      )}
    </div>
  );
}

export default AdminStudents;