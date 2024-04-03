import * as React from "react";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Runnings } from "../components/Runnings";
import { Exercises } from "../components/Exercises";

interface Running {
  id: number;
  name: string;
  distance: number;
  running_time: string;
  pace: number;
}

const Workouts = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Button variant="contained">
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
    </div>
  );
};

export default Workouts;
