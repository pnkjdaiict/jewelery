import About from "../components/aboutus/AboutUs";
import JewelryCategories from "../components/Home/Categories";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import ProductSection from "../components/Home/product-list";
import WhatsNewSection from "../components/Home/whatsnew/Whatsnew";
import ProductList from "../components/productlist/ProductList";
import GiftSection from "../components/topoffers";

export const metadata = {
  title: "Home - Jewellery eCommerce", 
  description: "Discover the best jewellery online, including diamonds, rings, and more.",
  keywords: "jewellery, diamonds, rings, necklaces",
};

export default function Home() {
  return (
    <>
      <HeroSection/>
      <JewelryCategories/>
<WhatsNewSection/>
 
      <ProductList/> 
      <GiftSection/>
      <ProductSection/> 
      <About/>
    </>
  );
}
