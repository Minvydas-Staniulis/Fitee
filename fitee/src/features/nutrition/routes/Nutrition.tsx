import React from "react";
import { BackgroundImageProps } from "../../../types";

export const Nutrition: React.FC<BackgroundImageProps> = ({
  backgroundImage,
}) => {
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
