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
        <XAxis dataKey="name" tick={{ fill: "#A1A1A1", fontSize: 12 }} />
        <YAxis tick={{ fill: "#A1A1A1", fontSize: 12 }} />
        <Tooltip />
        <Legend verticalAlign="top" layout="horizontal" align="center" />
        <Line
          type="monotone"
          dataKey="Performing"
          stroke="#39AD4B"
          strokeWidth={2}
          activeDot={{ r: 4 }}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Non-Performing"
          stroke="#F73541"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LoanChart;
