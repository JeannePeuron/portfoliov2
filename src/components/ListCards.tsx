import Card from "./Card";
import cardsData from "../data/cardsData.json";

export default function ListCards() {
  return (
    <div className="bg-[#FDF8F2] grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 place-items-center">
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}
