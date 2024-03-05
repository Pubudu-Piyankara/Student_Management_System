import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Search = (props: Props) => {
  const [students, setStudents] = useState([]);
  const [sQuery, setSQuery] = useState("");
  const [sResults, setSResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {

        console.log(sQuery); 
        const res = await axios.get(`http://localhost:8800/search?searchTerm=${sQuery}`);
        setSResults(res.data);
        setStudents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSearchResults();
  }, [sQuery]);

;
 
  return (
    <div>
      Search
      <div>
        <input
          type="text"
          value={sQuery}
          onChange={(e) => setSQuery(e.target.value)}
        />
      </div>
      <div>
        <div className="py-5">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Full Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Index Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date of Birth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student: any) => (
                <tr key={student.studentId}>
                  <td className="px-6 py-4 whitespace-nowrap hover:underline cursor-pointer">
                    <Link
                      to={`/details/${student.id}`} //--------------Open student details----------------
                    >
                      {student.studentFullName}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.indexNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.dateOfBirth}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        {sResults.map((result: any, index: number) => (
          <div key={index}>{result.indexNumber}</div>
        ))}
      </div>
    </div>
  );
};

export default Search;
