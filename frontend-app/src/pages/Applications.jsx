import { useEffect, useState } from "react"
import axios from "axios"

function Applications() {
  const [apps, setApps] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/applications")   // ✅ changed here
      .then(res => {
        console.log("Applications:", res.data)
        setApps(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div style={{ padding: "20px" }}>
      <h2>Applications 📄</h2>

      {apps.length === 0 && <p>No applications yet</p>}

      {apps.map(app => (
        <div key={app._id} style={card}>
          <p><b>Name:</b> {app.name}</p>
          <p><b>Email:</b> {app.email}</p>
          <p><b>Phone:</b> {app.phone}</p>
          <p><b>Status:</b> {app.status}</p>
        </div>
      ))}
    </div>
  )
}

const card = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "10px 0"
}

export default Applications