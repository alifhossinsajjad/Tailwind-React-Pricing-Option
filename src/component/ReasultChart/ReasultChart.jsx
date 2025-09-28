import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "class": "10",
    "physics": 85,
    "chemistry": 78,
    "english": 92
  },
  {
    "id": 2,
    "name": "Brian Smith",
    "class": "10",
    "physics": 74,
    "chemistry": 81,
    "english": 69
  },
  {
    "id": 3,
    "name": "Catherine Lee",
    "class": "10",
    "physics": 91,
    "chemistry": 88,
    "english": 95
  },
  {
    "id": 4,
    "name": "David Brown",
    "class": "10",
    "physics": 67,
    "chemistry": 72,
    "english": 70
  },
  {
    "id": 5,
    "name": "Emily Davis",
    "class": "10",
    "physics": 88,
    "chemistry": 90,
    "english": 85
  },
  {
    "id": 6,
    "name": "Frank Wilson",
    "class": "10",
    "physics": 79,
    "chemistry": 68,
    "english": 74
  },
  {
    "id": 7,
    "name": "Grace Miller",
    "class": "10",
    "physics": 95,
    "chemistry": 92,
    "english": 89
  },
  {
    "id": 8,
    "name": "Henry Moore",
    "class": "10",
    "physics": 58,
    "chemistry": 65,
    "english": 60
  },
  {
    "id": 9,
    "name": "Isabella Taylor",
    "class": "10",
    "physics": 82,
    "chemistry": 85,
    "english": 88
  },
  {
    "id": 10,
    "name": "Jack Anderson",
    "class": "10",
    "physics": 76,
    "chemistry": 80,
    "english": 73
  }
]




const ReasultChart = () => {
    return (
        <LineChart width={800} height={500} data={resultData}>
          <XAxis dataKey={'name'}></XAxis>
          <YAxis ></YAxis>

            <Line dataKey={'physics'}></Line>
            <Line dataKey={'english'} stroke='orange'></Line>
            <Line dataKey={'chemistry'} stroke='red'></Line>
        </LineChart>
    );
};

export default ReasultChart;