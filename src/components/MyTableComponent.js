import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const MyTableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setData(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const tableStyle = {
    width: "50%",
  };

  const columns = [
    { dataField: "id", text: "Id", headerStyle: { width: "100px" } },
    {
      dataField: "firstName",
      text: "FirstName",
      headerStyle: { width: "150px", fontSize: "14px" },
    },
    {
      dataField: "lastName",
      text: "LastName",
      headerStyle: { width: "150px" },
    },
    { dataField: "age", text: "Age", headerStyle: { width: "90px" } },
    { dataField: "gender", text: "Gender", headerStyle: { width: "120px" } },
    {
      dataField: "birthDate",
      text: "BirthDate",
      headerStyle: { width: "180px" },
    },
    { dataField: "email", text: "Email", headerStyle: { width: "300px" } },
    { dataField: "phone", text: "Phone", headerStyle: { width: "250px" } },
  ];

  return (
    <div>
      <h1>Data Table with React Bootstrap Table:</h1>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        rowStyle={{ fontSize: "14px" }}
        pagination={paginationFactory()}
      />
    </div>
  );
};

export default MyTableComponent;
