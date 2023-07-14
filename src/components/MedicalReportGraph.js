import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Day 1',
    amount: 2400,
  },
  {
    name: 'Day 2',
    amount: 12210,
  },
  {
    name: 'Day 3',
    amount: 5290,
  },
  {
    name: 'Day 4',
    amount: 20000,
  },
  {
    name: 'Day 5',
    amount: 10181,
  },
  {
    name: 'Day 6',
    amount: 15000,
  },
  {
    name: 'Day 7',
    amount: 2000,
  },
];

export default function MedicalReportGraph() {

    return (
      <ResponsiveContainer width="80%" height="50%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
