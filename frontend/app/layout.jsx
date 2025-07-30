import React from "react";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

import "@/assets/styles/globals.css";

export const metadata = {
  title: "RentalHub | Find The Perfect Rental",
  description: "Find your dream rental properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SessionProvider> {children} </SessionProvider>
      </body>
    </html>
  );
};

export default MainLayout;
