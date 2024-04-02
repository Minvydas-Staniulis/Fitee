import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
import TableActions from "../../../components/Table/TableActions";

interface Running {
  id: number;
  name: string;
  distance: number;
  running_time: string;
  pace?: number;
}

const Workouts = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [runnings, setRunnings] = React.useState<Running[]>([]);

  const fetchRunnings = () => {
    axios
      .get("http://localhost:5015/api/RunningApi/GetRunnings")
      .then((response) => {
        console.log(response.data.responseData);
        setRunnings(response.data.responseData);
      })
      .catch((error) => {
        console.error("Error fetching runnings:", error);
      });
  };

  React.useEffect(() => {
    fetchRunnings();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

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
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Button variant="contained">Add New</Button>
      </div>
      <Tabs value={tabValue} onChange={handleChange} centered>
        <Tab label="Running" />
        <Tab label="Exercises" />
      </Tabs>
      {tabValue === 0 && (
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
      )}
      {tabValue === 1 && (
        <div>
          <p>This is the content for the "Exercises" tab.</p>
        </div>
      )}
    </div>
  );
};

export default Workouts;
