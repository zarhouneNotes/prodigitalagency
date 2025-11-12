
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MyNavbar from  "../Components/Navbar"

import Providers from '../Providers'
import { Box, CssBaseline } from "@mui/material";
import Head from "next/head";
import Footer from "@/Components/Footer";




const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
export const metadata: Metadata = {
  title: "Pro Digital Agence",
  description: "cabinet dr Chehaibou Dounia  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'   
    >

    
      <body className={poppins.className}>
       <Providers>
       <CssBaseline />
        <MyNavbar />
         {children}
         {/* <Box  bgcolor={"grey"}  >HEY</Box> */}
         <Footer />
       </Providers>
      </body>
    </html>
  );
}
