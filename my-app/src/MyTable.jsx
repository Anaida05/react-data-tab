import { useState } from "react";
import DataTable from "react-data-table-component";
const MyTable = () => {
  const data = [
    {
      id: 1,
      name: "Anaida",
      email: "a@gmail.com",
      age: 26,
    },
    {
      id: 2,
      name: "John",
      email: "j@gmail.com",
      age: 21,
    },
    {
      id: 3,
      name: "Doe",
      email: "d@gmail.com",
      age: 30,
    },
  ];

  const [search, setSearch] = useState("");
  const filterData = data?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={search}
        placeholder="Enter name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <DataTable
        title="User Data"
        columns={columns}
        data={filterData}
        pagination
        selectableRows //checkbox for selecting rows
        // striped
        // highlightOnHover
      />
    </div>
  );
};

export default MyTable;
