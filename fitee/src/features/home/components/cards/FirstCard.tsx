import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { StatisticsIcon } from "assets/svg";

export const FirstCard = () => {
  return (
    <div className="mx-4 sm:mx-0">
      <CardContent className="bg-[#279674] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <StatisticsIcon className="w-12 h-12 sm:w-24 sm:h-24 text-white mb-4" />
        <div className="flex flex-col gap-3 text-white text-center">
          <Typography variant="h4" className="font-semibold text-lg sm:text-xl">
            TRACK YOUR STATS
          </Typography>
          <Typography variant="body1" className="text-sm sm:text-base">
            Add your workouts, exercises, track your performance, personal
            records. It helps you see your achievements and how you constantly
            improve!
          </Typography>
        </div>
      </CardContent>
    </div>
  );
};
