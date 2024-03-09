/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StudentInterface } from "../../types/Types";

type Props = {
  handleUpdate: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handelChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Update = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const studentId = location.pathname.split("/")[2]; //get the student id from the url

  //-----------------get & fetch student details(before update) by id-------------------
  const [selectStudent, setSelectStudent] = useState([]);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/student/${studentId}`
        );
        setSelectStudent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStudent();
  }, [studentId]);

  //-----------------update student details-------------------
  const [student, setStudent] = useState({
    studentFullName: "",
    address: "",
    indexNumber: 0,
    dateOfBirth: "",
    grade: 0,
    motherName: "",
    motherProfession: "",
    fatherName: "",
    fatherProfession: "",
    guardianName: "",
    guardianAddress: "",
    guardianContact: 0,
    extraActivities: "",
  });

  const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLInputElement;
    setStudent((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleUpdate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/student/${studentId}`, student);
      navigate("/student");
      console.log("Update successful");
    } catch (err) {
      console.log("Cannot update", err);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4">
        <div //---------------------------------------------->display student details before update
        >
          {selectStudent.map((student: StudentInterface) => (
            <div>
              <p>{student.studentFullName}</p>
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
        <div //------------------------------------------------>update student details
          className=""
        >
          <Label label="Student Full Name" />
          <Label label="Address" />
          <Label label="Index Number" />
          <Label label="Date of Birth" />
          <Label label="Grade" />
          <Label label="Mother's Name" />
          <Label label="Mother's Profession" />
          <Label label="Father's Name" />
          <Label label="Father's Profession" />
          <Label label="Guardian's Name" />
          <Label label="Guardian's Address" />
          <Label label="Guardian's Contact" />
          <Label label="Extra Activities" />
        </div>
        <div>
          <Input
            label="Student Full Name"
            type="text"
            placeholder="Enter student full name"
            onchange={handleChange}
            name="studentFullName"
          />
          <Input
            label="Address"
            type="text"
            placeholder="Enter address"
            onchange={handleChange}
            name="address"
          />
          <Input
            label="Index Number"
            type="number"
            placeholder="Enter index number"
            onchange={handleChange}
            name="indexNumber"
          />
          <Input
            label="Date of Birth"
            type="date"
            placeholder="Enter date of birth"
            onchange={handleChange}
            name="dateOfBirth"
          />
          <Input
            label="Grade"
            type="number"
            placeholder="Enter grade"
            onchange={handleChange}
            name="grade"
          />
          <Input
            label="Mother's Name"
            type="text"
            placeholder="Enter mother's name"
            onchange={handleChange}
            name="motherName"
          />
          <Input
            label="Mother's Profession"
            type="text"
            placeholder="Enter mother's profession"
            onchange={handleChange}
            name="motherProfession"
          />

          <Input
            label="Father's Name"
            type="text"
            placeholder="Enter father's name"
            onchange={handleChange}
            name="fatherName"
          />
          <Input
            label="Father's Profession"
            type="text"
            placeholder="Enter father's profession"
            onchange={handleChange}
            name="fatherProfession"
          />
          <Input
            label="Guardian's Name"
            type="text"
            placeholder="Enter guardian's name"
            onchange={handleChange}
            name="guardianName"
          />
          <Input
            label="Guardian's Address"
            type="text"
            placeholder="Enter guardian's address"
            onchange={handleChange}
            name="guardianAddress"
          />
          <Input
            label="Guardian's Contact"
            type="number"
            placeholder="Enter guardian's contact"
            onchange={handleChange}
            name="guardianContact"
          />
          <Input
            label="Extra Activities"
            type="text"
            placeholder="Enter extra activities"
            onchange={handleChange}
            name="extraActivities"
          />
        </div>
        <Button onClick={handleUpdate} text="Update" />
      </div>
    </div>
  );
};

export default Update;
