import React from "react";

interface NutritionProps {
  backgroundImage: string;
}

export const Nutrition: React.FC<NutritionProps> = ({ backgroundImage }) => {
  return (
    <div
      className="flex flex-col h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <p>aa</p>
    </div>
  );
};
