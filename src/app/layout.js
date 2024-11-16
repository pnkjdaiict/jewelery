import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/css/custom.css'  
import AddBootstrap from "./AddBootstrap";
import LoadMenuScript from "../components/LoadMenuScript";
import Header from "../components/layouts/Header";
import TopBar from "../components/Home/Topbar";
import Footer from "../components/Home/Footer";
import ScrollToTop from "../components/Home/ScrolltoTop";


// Default metadata for the entire site
export const metadata = {
  title: "Jewellery Store",
  description: "Explore the finest jewellery online",
  keywords: "jewellery, diamonds, rings, necklaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="relative"> 
        <Header/>
        <AddBootstrap/>
        <LoadMenuScript/>
        {children}
        <Footer/>
        <ScrollToTop/> 
      </body>
    </html>
  );
}
