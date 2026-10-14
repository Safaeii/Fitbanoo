import { Vazirmatn } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import ThemeProvider from "./components/ThemeProvider";
import Footer from "./components/Footer.jsx";
const vazir = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export const metadata = {
  title: "فیت‌بانو | باشگاه بانوان",
  description: "باشگاه تخصصی ورزش بانوان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={vazir.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer/>
        </ThemeProvider>
        
      </body>
    </html>
  );
}