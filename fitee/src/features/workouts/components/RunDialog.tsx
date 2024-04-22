import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useRunnings } from "hooks/useRunnings";
import { NewRunning } from "types";

interface RunDialogProps {
  open: boolean;
  handleClose: () => void;
}

export const RunDialog: React.FC<RunDialogProps> = ({ open, handleClose }) => {
  const [runningTime, setRunningTime] = React.useState("");
  const [hasError, setHasError] = React.useState(false);
  const [name, setName] = React.useState("");
  const [distance, setDistance] = React.useState(0);

  const { addRunning } = useRunnings();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(parseInt(event.target.value));
  };

  const handleRunningTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    const regexPattern = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/;
    if (regexPattern.test(input)) {
      setRunningTime(input);
      setHasError(false);
    } else {
      setRunningTime(input);
      setHasError(true);
    }
  };

  const handleAdd = () => {
    const data: NewRunning = {
      name: name,
      distance: distance,
      running_time: runningTime,
    };

    addRunning(data);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: any) => {
          event.preventDefault();
          handleClose();
        },
      }}
    >
      <DialogTitle>Run Details</DialogTitle>
      <DialogContent>
        <div className="flex flex-col gap-2">
          <TextField
            required
            name="Name"
            label="Run Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleNameChange}
          />
          <TextField
            required
            name="Distance"
            label="Distance"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleDistanceChange}
          />
          <TextField
            required
            name="Time"
            label="Running Time"
            helperText={hasError ? "00:00:00" : "00:00:00"}
            value={runningTime}
            onChange={handleRunningTimeChange}
            fullWidth
            variant="standard"
            error={hasError}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" onClick={handleAdd} disabled={hasError}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
