import React from "react";
import { Running } from "../types";
import axios from "axios";

type NewRunning = {
  name: string;
  distance: number;
  running_time: string;
};

export const useRunnings = () => {
  const [runnings, setRunnings] = React.useState<Running[]>([]);
  const [filterName, setFilterName] = React.useState<string>("");

  const addRunning = (data: NewRunning) => {
    axios
      .post(`http://localhost:5015/api/RunningApi/AddRunning`, data)
      .then((response) => {
        console.log("Successfully added running record:", response.data);
      })
      .catch((error) => {
        console.error("Error adding running record:", error);
      });
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

  const deleteRunning = (id: number) => {
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

  React.useEffect(() => {
    fetchRunnings();
  }, [filterName]);

  return { runnings, setFilterName, fetchRunnings, deleteRunning, addRunning };
};
