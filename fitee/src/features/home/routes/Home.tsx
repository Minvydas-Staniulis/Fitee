import Card from "@mui/material/Card";
import { FirstCard } from "../components/FirstCard";
import { SecondCard } from "../components/SecondCard";
import { ThirdCard } from "../components/ThirdCard";
import { BackgroundImageProps } from "../../../types";

export const Home: React.FC<BackgroundImageProps> = ({ backgroundImage }) => {
  return (
    <div
      className="flex flex-col h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-center pt-10">
        <Card className="w-2/3" sx={{ borderRadius: "10px" }}>
          <div className="grid grid-cols-3">
            <FirstCard />
            <SecondCard />
            <ThirdCard />
          </div>
        </Card>
      </div>
    </div>
  );
};
