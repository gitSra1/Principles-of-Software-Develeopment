import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './CreateTable.css'

const CreateTable = () => {
  const [cookieData, setCookieData] = useState([]);

  useEffect(() => {
    const data = Cookies.get('myCookie');
    if (data) {
      const dataArray = data.split('-').map((value) => {
        const values = value.split(' ');
        return {
          workInProgress: values[0],
          production: values[1],
          score: parseInt(values[1])-parseInt(values[0]),
        };
      });
      setCookieData(dataArray);
    }
  }, []);

  return (
    <div>
      <table className="my-table">
        <thead>
          <tr>
            <th>Work In Progress</th>
            <th>Production</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {cookieData.map((data, index) => (
            <tr key={index}>
              <td>{data.workInProgress}</td>
              <td>{data.production}</td>
              <td>{data.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateTable;
