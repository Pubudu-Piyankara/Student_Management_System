import React, { useEffect, useState } from 'react'
import { StaffInterface } from '../../types/Types';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

type Props = {}

const UpdateAdmin = (props: Props) => {
  const navigate = useNavigate();
    const location = useLocation();
    const staffId = location.pathname.split("/")[2]; //get the staff id from the url
    const [staffDetail, setStaffDetail] = useState([] as StaffInterface[]);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:8800/admin/${staffId}`
                );
                setStaffDetail(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchStaff();
    },[staffId]);

    const [newStaffData, setNewStaffData] = useState({} as StaffInterface);
    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewStaffData((prev: StaffInterface) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleUpdate = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/admin/${staffId}`, newStaffData);
            window.location.reload();
            navigate("/admin"	);
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <div>
        <div>
        <h1 className="text-2xl py-4">Staff Details</h1>
        <div>
            {staffDetail.map((staff: StaffInterface) => (
                <div key={staff.idStaff}>
                    <h1>{staff.empName}</h1>
                    <p>{staff.empPosition}</p>
                    <p>{staff.empContacts}</p>
                    <p>{staff.empAdddress}</p>
                    <p>{staff.empAge}</p> 
                    </div>
            ))}
        </div>
        </div>
        <div className="col-span-2 mr-96">
        <div className="flex flex-row justify-between text-right py-4">
          <Label label="Full Name" />
          <Input
            label=""
            placeholder="Enter Full Name"
            onchange={handelChange}
            name="empName"
            type="text"
          />
        </div>
        <div className="flex flex-row justify-between text-right py-4">
          <Label label="Member Position" />
          <Input
            label=""
            placeholder="Enter Member Position"
            onchange={handelChange}
            name="empPosition"
            type="text"
          />
        </div>
        <div className="flex flex-row justify-between text-left py-4">
          <Label label="Contact Number" />
          <Input
            label=""
            placeholder="Enter Contact Number"
            onchange={handelChange}
            name="empContacts"
            type="number"
          />
        </div>
        <div className="flex flex-row justify-between py-4">
          <Label label="Address" />
          <Input
            label=""
            placeholder="Enter Address"
            onchange={handelChange}
            name="empAdddress"
            type="text"
          />
        </div>
        <div className="flex flex-row justify-between py-4">
          <Label label="Age" />
          <Input
            label=""
            placeholder="Enter Age"
            onchange={handelChange}
            name="empAge"
            type="number"
          />
        </div>
        
        <Button onClick={handleUpdate} text="Update" />
      </div>
    </div>
  )
}

export default UpdateAdmin