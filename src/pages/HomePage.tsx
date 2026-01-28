import ListCards from "../components/ListCards";
import HomeImage from "../components/HomeImage";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 ">
      <HomeImage></HomeImage>
      <ListCards></ListCards>
    </div>
  );
}
