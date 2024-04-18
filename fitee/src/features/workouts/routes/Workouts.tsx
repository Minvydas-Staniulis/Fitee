import * as React from "react";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Runnings } from "../components/Runnings";
import { Exercises } from "../components/Exercises";
import { RunDialog } from "../components/RunDialog";
import { ExerciseDialog } from "../components/ExerciseDialog";

export const Workouts = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [openRun, setOpenRun] = React.useState(false);
  const [openExercise, setOpenExercise] = React.useState(false);

  const handleClickOpen = () => {
    tabValue === 0 ? setOpenRun(true) : setOpenExercise(true);
  };

  const handleClose = () => {
    setOpenRun(false);
    setOpenExercise(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex justify-end mb-4">
        <Button variant="contained" onClick={handleClickOpen}>
          Add {tabValue === 0 ? "Run" : "Exercise"}
        </Button>
      </div>
      <Tabs value={tabValue} onChange={handleChange} centered>
        <Tab label="Running" />
        <Tab label="Exercises" />
      </Tabs>
      {tabValue === 0 && <Runnings />}
      {tabValue === 1 && (
        <div>
          <Exercises />
        </div>
      )}
      <RunDialog open={openRun} handleClose={handleClose} />
      <ExerciseDialog open={openExercise} handleClose={handleClose} />
    </div>
  );
};

export default Workouts;
