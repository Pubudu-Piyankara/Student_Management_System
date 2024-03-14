import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { StaffInterface } from '../../types/Types';
import axios from 'axios';

type Props = {}

const AdminStaffDetail = (props: Props) => {
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

  return (
    <div>
        <h1 className="text-2xl py-4">Staff Details</h1>
        <div>
            {staffDetail.map((staff: StaffInterface) => (
                <div key={staff.idStaff}>
                    <h1>{staff.empName}</h1>
                    <p>{staff.empAdddress}</p>
                    <p>{staff.empPosition}</p>
                    <p>{staff.empContacts}</p>
                    <p>{staff.empAge}</p> 
                    </div>
            ))}
        </div>
    </div>
  )
}

export default AdminStaffDetail