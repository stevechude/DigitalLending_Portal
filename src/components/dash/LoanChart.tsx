import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LoanChart = ({ data }: any) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="9 9" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: "#A1A1A1", fontSize: 12 }}
            axisLine={{ stroke: "#E7E7E7" }}
          />
          <YAxis
            tick={{ fill: "#A1A1A1", fontSize: 12 }}
            axisLine={{ stroke: "#E7E7E7" }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Performing"
            stroke="#39AD4B"
            strokeWidth={2}
            activeDot={{ r: 4 }}
            dot={false}
            name="Performing"
          />
          <Line
            type="monotone"
            dataKey="Non-Performing"
            stroke="#F73541"
            strokeWidth={2}
            dot={false}
            name="Non-Performing"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LoanChart;
