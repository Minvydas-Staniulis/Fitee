import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Menu from "@mui/material/Menu";
import TablePagination from "@mui/material/TablePagination";
import { useRunnings } from "hooks/useRunnings";
import TableActions from "components/Table/TableActions";

export const Runnings = () => {
  const { runnings, deleteRunning } = useRunnings();
  const [localFilterName, setLocalFilterName] = React.useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const open = Boolean(anchorEl);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleView = (name: string) => {
    alert(`Viewing details of ${name}`);
  };

  const handleDelete = (id: number) => {
    deleteRunning(id);
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
                    value={localFilterName}
                    onChange={(e) => {
                      setLocalFilterName(e.target.value);
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
            {runnings
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((running) => (
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={runnings.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};
