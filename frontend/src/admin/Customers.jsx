import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./Dashboard.css";

const customers = [
  { name: "John Smith", email: "john@gmail.com", phone: "9876543210", city: "Mumbai", since: "2025" },
  { name: "Emma Wilson", email: "emma@gmail.com", phone: "9988776655", city: "Pune", since: "2025" },
  { name: "David Brown", email: "david@gmail.com", phone: "9123456780", city: "Delhi", since: "2024" },
  { name: "Sophia Lee", email: "sophia@gmail.com", phone: "9001122334", city: "Bangalore", since: "2026" },
  { name: "Arjun Mehta", email: "arjun@gmail.com", phone: "9888999888", city: "Mumbai", since: "2026" },
];

export default function Customers() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Topbar title="Customer Management" subtitle="View and manage your registered guests" />

        <div className="table-section">

          <h2>All Customers</h2>
          <p className="page-subtitle">
            A complete directory of your valued guests and their contact details.
          </p>

          <table>

            <thead>

              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Member Since</th>
              </tr>

            </thead>

            <tbody>

              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.city}</td>
                  <td>{customer.since}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}
