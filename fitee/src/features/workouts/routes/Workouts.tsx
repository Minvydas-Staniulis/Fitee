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
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TableActions from "../../../components/Table/TableActions";

function createData(name: string, distance: number, time: number) {
  return { name, distance, time };
}

const rows = [
  createData("Morning run", 3, 15),
  createData("Run", 7, 43),
  createData("Run", 1, 17),
  createData("Run", 4, 59),
  createData("First run", 1, 12),
];

const Workouts = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleView = (name: string) => {
    alert(`Viewing details of ${name}`);
    handleMenuClose();
  };

  const handleDelete = (name: string) => {
    alert(`Deleting entry ${name}`);
    handleMenuClose();
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
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.distance}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>
                    {row.distance !== 0
                      ? (row.time / row.distance).toFixed(2)
                      : "N/A"}
                  </TableCell>
                  <TableCell align="right">
                    <TableActions
                      rowName={row.name}
                      handleView={handleView}
                      handleDelete={handleDelete}
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
