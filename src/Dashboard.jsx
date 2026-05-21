export default function Dashboard() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <div style={{ padding: "15px", border: "1px solid #ccc" }}>
          <h3>Total Courses</h3>
          <p>12</p>
        </div>

        <div style={{ padding: "15px", border: "1px solid #ccc" }}>
          <h3>Enrolled</h3>
          <p>5</p>
        </div>

        <div style={{ padding: "15px", border: "1px solid #ccc" }}>
          <h3>Completed</h3>
          <p>2</p>
        </div>
      </div>

      <button style={{ marginTop: "20px" }}>
        Add New Course
      </button>
    </div>
  );
}
