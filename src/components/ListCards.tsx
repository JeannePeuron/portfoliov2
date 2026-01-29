import Card from "./Card";
import cardsData from "../data/cardsData.json";

export default function ListCards() {
  return (
    <div className=" bg-[#FDF8F2] lg:grid grid-cols-3 p-4 gap-6">
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}
