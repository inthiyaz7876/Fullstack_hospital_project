import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Day 1',
    amount: 2400,
  },
  {
    name: 'Day 2',
    amount: 22100,
  },
  {
    name: 'Day 3',
    amount: 12290,
  },
  {
    name: 'Day 4',
    amount: 20000,
  },
  {
    name: 'Day 5',
    amount: 15081,
  },
  {
    name: 'Day 6',
    amount: 25000,
  },
  {
    name: 'Day 7',
    amount: 2000,
  },
];

export default function PatientGraph() {
    return (
      <ResponsiveContainer width="80%" height="50%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    );
  }

