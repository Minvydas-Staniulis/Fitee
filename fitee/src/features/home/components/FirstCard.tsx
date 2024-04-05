import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { StatisticsIcon } from "../../../assets/svg";

export const FirstCard = () => {
  return (
    <>
      <CardContent className="bg-[#c2a5f9] col-span-3 md:col-span-1">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-3">
            <Typography variant="h5">TRACK YOUR STATS</Typography>
            <Typography variant="body2">
              Add your workouts, exercises - track your performance, personal
              records. It helps you to see your achievements and how you
              constantly improve!
            </Typography>
          </div>
          <div className="flex">
            <StatisticsIcon className="w-[150px] h-[150px]" />
          </div>
        </div>
      </CardContent>
    </>
  );
};
