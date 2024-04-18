import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NutritionIcon } from "../../../assets/svg";

export const ThirdCard = () => {
  return (
    <CardContent className="bg-[#279674] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
      <NutritionIcon className="w-24 h-24 text-white mb-4" />
      <div className="flex flex-col gap-3 text-white text-center">
        <Typography variant="h4" className="font-semibold">
          TRACK YOUR NUTRITION
        </Typography>
        <Typography variant="body1">
          It's nice to track your calories and nutrition of the food you eat in
          order to gain or lose weight.
        </Typography>
      </div>
    </CardContent>
  );
};
