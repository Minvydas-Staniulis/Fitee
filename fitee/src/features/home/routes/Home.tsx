import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  BenchPressIcon,
  NutritionIcon,
  StatisticsIcon,
} from "../../../assets/svg";

interface HomeProps {
  backgroundImage: string;
}

export const Home: React.FC<HomeProps> = ({ backgroundImage }) => {
  return (
    <div
      className="flex flex-col h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-center">
        <Card className="w-2/3" sx={{ borderRadius: "5%" }}>
          <div className="grid grid-cols-3 gap-1">
            <CardContent className="bg-[#E27D60] col-span-3 md:col-span-1">
              <div className="flex flex-row gap-10">
                <div className="flex flex-col gap-3">
                  <Typography variant="h5">TRACK YOUR STATS</Typography>
                  <Typography variant="body2">
                    Add your workouts, exercises - track your performance,
                    personal records. It helps you to see your achievements and
                    how you constantly improve!
                  </Typography>
                </div>
                <div className="flex">
                  <StatisticsIcon className="w-[150px] h-[150px]" />
                </div>
              </div>
            </CardContent>

            <CardContent className="bg-[#E8A87C] col-span-3 md:col-span-1">
              <div className="flex flex-row gap-10">
                <div className="flex flex-col gap-3">
                  <Typography variant="h5">ADD YOUR PROGRESS</Typography>
                  <Typography variant="body2">
                    The distance you ran, exercise you did, weights you used -
                    all in one place.
                  </Typography>
                </div>
                <div className="flex">
                  <BenchPressIcon className="w-[150px] h-[150px]" />
                </div>
              </div>
            </CardContent>

            <CardContent className="bg-[#C38D9E] col-span-3 md:col-span-1">
              <div className="flex flex-row gap-10">
                <div className="flex flex-col gap-3">
                  <Typography variant="h5">TRACK YOUR NUTRITION</Typography>
                  <Typography variant="body2">
                    It's nice to track your calories and nutrition of the food
                    you eat in order to gain or lose weight
                  </Typography>
                </div>
                <div className="flex">
                  <NutritionIcon className="w-[150px] h-[150px]" />
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};
