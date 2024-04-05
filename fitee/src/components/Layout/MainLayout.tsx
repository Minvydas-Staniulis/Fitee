import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto mt-20">{children}</main>
      <Footer />
    </div>
  );
};
