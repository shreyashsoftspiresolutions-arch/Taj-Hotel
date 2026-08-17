import "./Notifications.css";

export default function Notifications() {
  return (
    <div className="notifications">

      <h2>Notifications</h2>

      <div className="notify success">
        ✔ Room 205 booked successfully.
      </div>

      <div className="notify warning">
        ⚠ One booking is pending approval.
      </div>

      <div className="notify info">
        ℹ Three new customers registered today.
      </div>

    </div>
  );
}