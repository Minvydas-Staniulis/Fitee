import * as React from "react";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Runnings } from "../components/Runnings";

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
        <Button variant="contained">Add New</Button>
      </div>
      <Tabs value={tabValue} onChange={handleChange} centered>
        <Tab label="Running" />
        <Tab label="Exercises" />
      </Tabs>
      {tabValue === 0 && <Runnings />}
      {tabValue === 1 && (
        <div>
          <p>This is the content for the "Exercises" tab.</p>
        </div>
      )}
    </div>
  );
};

export default Workouts;
