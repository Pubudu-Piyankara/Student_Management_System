import React, { useEffect, useState } from "react";
import { TeacherInterface } from "../../types/Types";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

type Props = {};

const UpadateTeacher = (props: Props) => {
  const navigate = useNavigate();
  const [selectTeacher, setSelectTeacher] = useState([]);
  const location = useLocation();
  const teacherId = location.pathname.split("/")[2];
  const [newTeacherData, setNewTeacherData] = useState({
   
    teacherName: "",
    teacherIndex: 0,
    contactNumber: 0,
    address: "",
    age: 0,
    qualification: "",
    tic: "",
    
  });


  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/teachers/${teacherId}`
        );
        setSelectTeacher(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTeacher();
  }, [teacherId]);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name === 'contactNumber' || e.target.name === 'age' || e.target.name === 'teacherIndex' ? parseInt(e.target.value) : e.target.value;
  setNewTeacherData((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(selectTeacher);
    try {
      axios.put(`http://localhost:8000/teachers/${teacherId}`, newTeacherData);
      console.log("Upadate Successfully")
      navigate("/teachers");
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="grid grid-cols-3">
      <div className="ml-5">
        {selectTeacher.map((teacher: TeacherInterface) => (
          <div key={teacher.idTeacher} 
          className=""
          >
            <p className="pt-4">{teacher.teacherName}</p>
            <p className="pt-10">{teacher.teacherIndex}</p>
            <p className="pt-10">{teacher.contactNumber}</p>
            <p className="pt-10">{teacher.address}</p>
            <p className="pt-10">{teacher.age}</p>
            <p className="pt-10">{teacher.qualification}</p>
            <p className="pt-10">{teacher.tic}</p>
          </div>
        ))}
      </div>
      <div className="col-span-2 mr-96">
        <div className="flex flex-row justify-between text-right py-4">
          <Label label="Teacher Full Name" />
          <Input
            label=""
            placeholder="Enter Teacher Full Name"
            onchange={handelChange}
            name="teacherName"
            type="text"
          />
        </div>
        <div className="flex flex-row justify-between text-right py-4">
          <Label label="Teacher Index" />
          <Input
            label=""
            placeholder="Enter Teacher Index"
            onchange={handelChange}
            name="teacherIndex"
            type="text"
          />
        </div>
        <div className="flex flex-row justify-between text-left py-4">
          <Label label="Contact Number" />
          <Input
            label=""
            placeholder="Enter Contact Number"
            onchange={handelChange}
            name="contactNumber"
            type="text"
          />
        </div>
        <div className="flex flex-row justify-between py-4">
          <Label label="Address" />
          <Input
            label=""
            placeholder="Enter Address"
            onchange={handelChange}
            name="address"
            type="text"
          />
        </div>
        <div className="flex flex-row justify-between py-4">
          <Label label="Age" />
          <Input
            label=""
            placeholder="Enter Age"
            onchange={handelChange}
            name="age"
            type="text"
          />
        </div>
        <div className="flex flex-row justify-between py-4">
          <Label label="Qualification" />
          <Input
            label=""
            placeholder="Enter Qualification"
            onchange={handelChange}
            name="qualification"
            type="text"
          />
        </div>
        <div className="flex flex-row justify-between py-4">
          <Label label="Teacher In Charge" />
          <Input
            label=""
            placeholder="Enter Teacher In Charge"
            onchange={handelChange}
            name="tic"
            type="text"
          />
        </div>
        <Button onClick={handleUpdate} text="Update" />
      </div>
    </div>
  );
};

export default UpadateTeacher;
