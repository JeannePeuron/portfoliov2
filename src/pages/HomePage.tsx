import ListCards from "../components/ListCards";
import HomeImage from "../components/HomeImage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 ">
      <Navbar></Navbar>
      <HomeImage></HomeImage>
      <ListCards></ListCards>
      <Footer></Footer>
    </div>
  );
}
