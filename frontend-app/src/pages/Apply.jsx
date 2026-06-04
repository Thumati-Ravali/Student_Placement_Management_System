import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ApplyJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      cgpa: e.target.cgpa.value,
      year: e.target.year.value,
      skills: e.target.skills.value,
      mobile: e.target.mobile.value,
      resume: e.target.resume.value,
      jobId: id
    };

    await axios.post(
      "http://localhost:5000/api/applications",   // ✅ changed here
      data
    );

    alert("Applied Successfully");
    navigate("/student/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply Job</h2>

      <input name="name" placeholder="Name" required /><br />
      <input name="email" placeholder="Email" required /><br />
      <input name="cgpa" placeholder="CGPA" /><br />
      <input name="year" placeholder="Current Year" /><br />
      <input name="skills" placeholder="Skills" /><br />
      <input name="mobile" placeholder="Mobile" /><br />
      <input name="resume" placeholder="Resume Link" /><br />

      <button type="submit">Apply</button>
    </form>
  );
}

export default ApplyJob;