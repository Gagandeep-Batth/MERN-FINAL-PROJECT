import React from "react";
import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/authContext";

export const metadata = {
  title: "RentalHub | Find The Perfect Rental",
  description: "Find your dream rental properties",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main> {children} </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
