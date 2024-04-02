import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import TableActions from "../../../components/Table/TableActions";

interface Running {
  id: number;
  name: string;
  distance: number;
  running_time: string;
  pace: number;
}

export const Runnings = () => {
  const [runnings, setRunnings] = React.useState<Running[]>([]);

  const fetchRunnings = () => {
    axios
      .get("http://localhost:5015/api/RunningApi/GetRunnings")
      .then((response) => {
        setRunnings(response.data.responseData);
      })
      .catch((error) => {
        console.error("Error fetching runnings:", error);
      });
  };

  React.useEffect(() => {
    fetchRunnings();
  }, []);

  const handleView = (name: string) => {
    alert(`Viewing details of ${name}`);
  };

  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:5015/api/RunningApi/DeleteRunning/${id}`)
      .then((response) => {
        alert(`Deleted ${id}`);
        fetchRunnings();
      })
      .catch((error) => {
        alert(`Error: ${error}`);
      });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="running table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Distance&nbsp;(km)</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Pace&nbsp;(min/km)</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {runnings.map((running) => (
              <TableRow
                key={running.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {running.name}
                </TableCell>
                <TableCell>{running.distance}</TableCell>
                <TableCell>{running.running_time}</TableCell>
                <TableCell>{running.pace}</TableCell>
                <TableCell align="right">
                  <TableActions
                    rowName={running.name}
                    handleView={() => handleView(running.name)}
                    handleDelete={() => handleDelete(running.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
