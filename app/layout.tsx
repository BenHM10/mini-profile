export const metadata = {
    title: "NotIndihome - Internet Provider",
    description: "Reliable and Fast Internet for Everyone",
  };
  
  import "./globals.css";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-white text-gray-800">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    );
  }