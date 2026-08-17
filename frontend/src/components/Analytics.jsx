import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import "./Analytics.css";

const revenueData = [
  { month: "Jan", revenue: 4500 },
  { month: "Feb", revenue: 6200 },
  { month: "Mar", revenue: 7800 },
  { month: "Apr", revenue: 9400 },
  { month: "May", revenue: 10200 },
  { month: "Jun", revenue: 11800 },
];

const bookingData = [
  { name: "Confirmed", value: 60 },
  { name: "Pending", value: 25 },
  { name: "Cancelled", value: 15 },
];

const COLORS = ["#D4AF37", "#00b894", "#e74c3c"];

export default function Analytics() {
  return (
    <div className="analytics">

      <div className="chart-box">

        <h2>Monthly Revenue</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#D4AF37" />
          </BarChart>
        </ResponsiveContainer>

      </div>

          <div className="chart-box">

        <h2>Booking Status</h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>

            <Pie
              data={bookingData}
              dataKey="value"
              outerRadius={100}
            >
              {bookingData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

        <div className="chart-legend">
          {bookingData.map((entry, index) => (
            <span key={entry.name}>
              <span
                className="lg-dot"
                style={{ background: COLORS[index % COLORS.length] }}
              ></span>
              {entry.name} ({entry.value}%)
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}