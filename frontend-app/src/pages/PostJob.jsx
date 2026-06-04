import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostJob() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const job = {
      title: e.target.title.value,
      company: e.target.company.value,
      role: e.target.role.value,
      eligibility: e.target.eligibility.value,
      experience: e.target.experience.value,
      cgpa: e.target.cgpa.value,
      description: e.target.description.value
    };

    await axios.post(
      "http://localhost:5000/api/jobs",   // ✅ changed here
      job
    );

    alert("Job Posted");
    navigate("/recruiter/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post Job</h2>

      <input name="title" placeholder="Job Title" /><br />
      <input name="company" placeholder="Company Name" /><br />
      <input name="role" placeholder="Role" /><br />
      <input name="eligibility" placeholder="Eligibility" /><br />
      <input name="experience" placeholder="Experience" /><br />
      <input name="cgpa" placeholder="CGPA" /><br />
      <textarea name="description" placeholder="Description" /><br />

      <button type="submit">Post</button>
    </form>
  );
}

export default PostJob;