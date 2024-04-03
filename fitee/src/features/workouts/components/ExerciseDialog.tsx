import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

interface ExerciseDialogProps {
  open: boolean;
  handleClose: () => void;
}

export const ExerciseDialog: React.FC<ExerciseDialogProps> = ({
  open,
  handleClose,
}) => {
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
      <DialogTitle>Exercise Details</DialogTitle>
      <DialogContent>
        <TextField
          required
          name="Name"
          label="Exercise Name"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Add</Button>
      </DialogActions>
    </Dialog>
  );
};
