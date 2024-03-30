import React from "react";
import { Header } from "./Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <main className="relative focus:outline-none mt-[86px]">
          {children}
        </main>
      </div>
    </div>
  );
};
