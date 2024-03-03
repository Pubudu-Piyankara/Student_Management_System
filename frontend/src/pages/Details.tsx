import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

type Props = {}

const Details = (props: Props) => {

    const location = useLocation();
    const studentId = location.pathname.split("/")[2]; //get the student id from the url
    const [getStudent, setGetStudent] = useState([]);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:8800/student/${studentId}`
                );
                setGetStudent(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchStudent();
    }
    , [studentId]);


  return (
    <div>
        <h1 className="text-2xl py-4">Student Details</h1>
        <div>
            {getStudent.map((student: any) => (
                <div key={student.studentIdid}>
                    <h1>{student.studentFullName}</h1>
                    <p>{student.address}</p>
                    <p>{student.indexNumber}</p>
                    <p>{student.dateOfBirth}</p>
                    <p>{student.grade}</p>
                    <p>{student.motherName}</p>
                    <p>{student.motherProfession}</p>
                    <p>{student.fatherName}</p>
                    <p>{student.fatherProfession}</p>
                    <p>{student.guardianName}</p>
                    <p>{student.guardianAddress}</p>
                    <p>{student.guardianContact}</p>
                    <p>{student.extraActivities}</p>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Details