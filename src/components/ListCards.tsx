import Card from "./Card";
import cardsData from "../data/cardsData.json";

export default function ListCards() {
  return (
    <div className="grid grid-cols-3 p-4 gap-6 bg-[#FDF8F2]">
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}
