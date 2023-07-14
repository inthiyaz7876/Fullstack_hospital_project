import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'Month 1',
    uv: 4000,
    pv: 2400,
    amt: 200400,
  },
  {
    name: 'Month 2',
    uv: 3000,
    pv: 1398,
    amt: 200210,
  },
  {
    name: 'Month 3',
    uv: 2000,
    pv: 9800,
    amt: 200290,
  },
  {
    name: 'Month 4',
    uv: 2780,
    pv: 3908,
    amt: 220000,
  },
  {
    name: 'Month 5',
    uv: 1890,
    pv: 4800,
    amt: 201181,
  },
  {
    name: 'Month 6',
    uv: 2390,
    pv: 3800,
    amt: 250000,
  },
  {
    name: 'Month 7',
    uv: 3490,
    pv: 4300,
    amt: 211000,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function EmployeeReport() {
  return (
    <ResponsiveContainer width="80%" height="50%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="amt" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
  );
}
