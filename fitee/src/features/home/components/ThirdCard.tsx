import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { NutritionIcon } from "../../../assets/svg";

export const ThirdCard = () => {
  return (
    <>
      <CardContent className="bg-[#2d67f8] col-span-3 md:col-span-1">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-3">
            <Typography variant="h5">TRACK YOUR NUTRITION</Typography>
            <Typography variant="body2">
              It's nice to track your calories and nutrition of the food you eat
              in order to gain or lose weight
            </Typography>
          </div>
          <div className="flex">
            <NutritionIcon className="w-[150px] h-[150px]" />
          </div>
        </div>
      </CardContent>
    </>
  );
};
