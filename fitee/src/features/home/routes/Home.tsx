import { Card, CardContent } from "@mui/material";
import { FirstCard } from "../components/cards/FirstCard";
import { SecondCard } from "../components/cards/SecondCard";
import { ThirdCard } from "../components/cards/ThirdCard";

export const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-wrap justify-center pt-10 gap-2">
        <div className="flex justify-center w-full sm:w-1/3">
          <FirstCard />
        </div>
        <div className="flex justify-center w-full sm:w-1/3">
          <SecondCard />
        </div>
        <div className="flex justify-center w-full sm:w-1/3">
          <ThirdCard />
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-20 gap-2">
        <Card>
          <CardContent>
            <p>Total Runs: 0</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p>Total Distance: 0 km</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
