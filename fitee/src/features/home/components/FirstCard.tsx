import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { StatisticsIcon } from "../../../assets/svg";

export const FirstCard = () => {
  return (
    <CardContent className="bg-[#279674] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
      <StatisticsIcon className="w-24 h-24 text-white mb-4" />
      <div className="flex flex-col gap-3 text-white text-center">
        <Typography variant="h4" className="font-semibold">
          TRACK YOUR STATS
        </Typography>
        <Typography variant="body1">
          Add your workouts, exercises, track your performance, personal
          records. It helps you see your achievements and how you constantly
          improve!
        </Typography>
      </div>
    </CardContent>
  );
};
