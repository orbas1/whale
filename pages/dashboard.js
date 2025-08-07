export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="grid">
        <div className="card">
          <h2>today's money</h2>
          <p>$53,000</p>
        </div>
        <div className="card">
          <h2>today's users</h2>
          <p>2,300</p>
        </div>
        <div className="card">
          <h2>new clients</h2>
          <p>+3,462</p>
        </div>
        <div className="card">
          <h2>sales</h2>
          <p>$103,430</p>
        </div>
      </div>
    </div>
  );
}
