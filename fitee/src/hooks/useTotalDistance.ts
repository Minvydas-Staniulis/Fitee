import axios from "axios";
import React from "react";

export const useTotalDistance = () => {
  const [totalDistance, setTotalDistance] = React.useState<Number>(0);

  const fetchDistance = () => {
    axios
      .get(`http://localhost:5015/api/RunningApi/TotalRunDistance`)
      .then((response) => {
        setTotalDistance(response.data.totalDistance);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    fetchDistance();
  });

  return totalDistance;
};
