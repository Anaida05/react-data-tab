import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios"
const FetchingData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Website",
      selector: (row) => row.website,
    },
  ];
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>Fetching Data from Json</h2>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <DataTable
          columns={columns}
          data={users}
          striped
          highlightOnHover
          pagination
        />
      )}
    </div>
  );
};

export default FetchingData;
