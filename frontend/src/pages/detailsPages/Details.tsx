import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { StudentInterface } from '../../types/Types';

type Props = {}

const Details = (props: Props) => {

    const location = useLocation();
    const studentId = location.pathname.split("/")[2]; //get the student id from the url
    const [studentDetails, setStudentDetails] = useState([]);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:8000/student/${studentId}`
                );
                setStudentDetails(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchStudent();
    }
    , [studentId]);


  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
        <div className='shadow-2xl rounded-md p-5 bg-slate-100'>

        <h1 className=" text-2xl py-4 mr-10">Student Details</h1>
        <div>
            {studentDetails.map((student: StudentInterface) => (
                <div key={student.id}>
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
    </div>
  )
}

export default Details