import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BenchPressIcon } from "../../../assets/svg";

export const SecondCard = () => {
  return (
    <CardContent className="bg-[#279674] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
      <BenchPressIcon className="w-24 h-24 text-white mb-4" />
      <div className="flex flex-col gap-3 text-white text-center">
        <Typography variant="h4" className="font-semibold">
          ADD YOUR PROGRESS
        </Typography>
        <Typography variant="body1">
          The distance you ran, exercise you did, weights you used - all in one
          place.
        </Typography>
      </div>
    </CardContent>
  );
};
