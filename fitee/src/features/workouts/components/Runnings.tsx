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
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Menu from "@mui/material/Menu";

interface Running {
  id: number;
  name: string;
  distance: number;
  running_time: string;
  pace: number;
}

export const Runnings = () => {
  const [runnings, setRunnings] = React.useState<Running[]>([]);
  const [filterName, setFilterName] = React.useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchRunnings = () => {
    axios
      .get(
        `http://localhost:5015/api/RunningApi/GetRunnings?name=${filterName}`
      )
      .then((response) => {
        setRunnings(response.data.responseData);
      })
      .catch((error) => {
        console.error("Error fetching runnings:", error);
      });
  };

  React.useEffect(() => {
    fetchRunnings();
  }, [filterName]);

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
              <TableCell>
                <div className="flex items-center gap-1">
                  <p>Name</p>
                  <IconButton
                    onClick={handleClick}
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    size="small"
                  >
                    <FilterAltIcon />
                  </IconButton>
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <TextField
                    label="Filter by name"
                    value={filterName}
                    onChange={(e) => {
                      setFilterName(e.target.value);
                    }}
                  />
                </Menu>
              </TableCell>
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
