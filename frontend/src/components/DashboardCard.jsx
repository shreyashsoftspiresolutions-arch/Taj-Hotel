import "./DashboardCard.css";

export default function DashboardCard({
  title,
  value,
  color,
  icon,
}) {
  return (
    <div
      className="dashboard-card"
      style={{ borderTop: `5px solid ${color}` }}
    >
      <div className="card-icon">{icon}</div>

      <h4>{title}</h4>

      <h2>{value}</h2>
    </div>
  );
}