import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TeacherInterface } from "../../types/Types";

type Props = {};

const DetailsTeacher = (props: Props) => {
  const location = useLocation();
  const teacherId = location.pathname.split("/")[2]; //get the teacher id from the url
  const [teacherDetail, setTeacherDetail] = useState([]);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/teachers/${teacherId}`
        );
        setTeacherDetail(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStudent();
  }, [teacherId]);
  return (
    <div>
      <h1 className="text-2xl py-4">Student Details</h1>
      <div>
        {teacherDetail.map((teacher: TeacherInterface) => (
          <div key={teacher.idTeacher}>
            <h1>{teacher.teacherName}</h1>
            <p>{teacher.address}</p>
            <p>{teacher.teacherIndex}</p>
            <p>{teacher.contactNumber}</p>
            <p>{teacher.age}</p>
            <p>{teacher.qualification}</p>
            <p>{teacher.tic}</p>  
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsTeacher;
