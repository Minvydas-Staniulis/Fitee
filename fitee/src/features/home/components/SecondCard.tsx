import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { BenchPressIcon } from "../../../assets/svg";

export const SecondCard = () => {
  return (
    <>
      <CardContent className="bg-[#ffd8ea] col-span-3 md:col-span-1">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-3 text-black">
            <Typography variant="h5">ADD YOUR PROGRESS</Typography>
            <Typography variant="body2">
              The distance you ran, exercise you did, weights you used - all in
              one place.
            </Typography>
          </div>
          <div className="flex">
            <BenchPressIcon className="w-[150px] h-[150px] stroke-[#000000]" />
          </div>
        </div>
      </CardContent>
    </>
  );
};
