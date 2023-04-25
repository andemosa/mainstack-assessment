import { ResponsiveContainer, Pie, Cell, Tooltip, PieChart } from "recharts";

type Props = {
  chartData: {
    name: string;
    value: number;
    color: string;
  }[];
};

const PieChartComp = ({ chartData }: Props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          minAngle={10}
          innerRadius={30}
          outerRadius={60}
          paddingAngle={0}
          fill="#8884d8"
          dataKey="value"
          labelLine={false}
        >
          {chartData.map(({ color }) => (
            <Cell key={color} fill={color} stroke={"none"} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComp;
