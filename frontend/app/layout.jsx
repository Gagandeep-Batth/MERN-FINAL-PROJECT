import React from "react";
import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "RentalHub | Find The Perfect Rental",
  description: "Find your dream rental properties",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main> {children} </main>
      </body>
    </html>
  );
};

export default RootLayout;
