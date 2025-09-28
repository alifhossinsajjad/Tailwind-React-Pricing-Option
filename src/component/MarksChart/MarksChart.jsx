import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise)
    const markData = marksDataRes.data;
    

    // data processing for the chart 


    const marksChartData = markData.map(studentData => {
        const student = {
            id : studentData.student_id,
            name : studentData.name,
            math : studentData.marks.math,
            science : studentData.marks.science,
            english : studentData.marks.english,
        }

        const studentAvg = (student.math + student.science + student.english) / 3;



        student.studentAvg = studentAvg;
        return student;
    })


    console.log(marksChartData);
    return (
        <div>
            <BarChart width={800} height={800} data ={marksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'math'} fill='gray'></Bar>
                <Bar dataKey={'science'} fill='red'></Bar>
                <Bar dataKey={'english'} fill='green'></Bar>
                <Bar dataKey={'studentAvg'} fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;